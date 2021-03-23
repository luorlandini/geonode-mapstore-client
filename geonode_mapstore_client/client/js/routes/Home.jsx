/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import url from 'url';
import { createSelector } from 'reselect';
import { Button } from 'react-bootstrap-v1';
import castArray from 'lodash/castArray';
import { loadLocale } from '@mapstore/framework/actions/locale';
import { currentLocaleSelector } from '@mapstore/framework/selectors/locale';

import FaIcon from '@js/components/home/FaIcon';

import SearchBar from '@js/components/home/SearchBar';
import BrandNavbar from '@js/components/home/BrandNavbar';
import Hero from '@js/components/home/Hero';
import MenuIndex from '@js/components/home/MenuIndex';
import CardGrid from '@js/components/home/CardGrid';
import DetailsPanel from '@js/components/home/DetailsPanel';
import FiltersMenu from '@js/components/home/FiltersMenu';
import FilterForm from '@js/components/home/FilterForm';
import LanguageSelector from '@js/components/home/LanguageSelector';
import {
    fetchSuggestions,
    searchResources,
    requestResource,
    updateSuggestions
} from '@js/actions/gnsearch';
import {
    hashLocationToHref,
    getFilterById
} from '@js/utils/GNSearchUtils';
import { withResizeDetector } from 'react-resize-detector';
import Footer from '@js/components/home/Footer';
import { useInView } from 'react-intersection-observer';
import {
    getKeywords,
    getCategories,
    getRegions,
    getOwners
} from '@js/api/geonode/v1';
import { getResourceTypes } from '@js/api/geonode/v2';

const DEFAULT_SUGGESTIONS = [];
const DEFAULT_RESOURCES = [];

const ConnectedLanguageSelector = connect(
    createSelector([
        currentLocaleSelector
    ], (value) => ({
        value
    })),
    {
        onSelect: loadLocale.bind(null, null)
    }
)(LanguageSelector);

const ConnectedSearchBar = connect(
    createSelector([
        state => state?.gnsearch?.suggestions || DEFAULT_SUGGESTIONS,
        state => state?.gnsearch?.loading || false
    ], (suggestions, loading) => ({
        suggestions,
        loading
    })),
    {
        onFetchSuggestions: fetchSuggestions,
        onClearSuggestions: updateSuggestions.bind(null, [])
    }
)(SearchBar);

const CardGridWithMessageId = ({ query, user, isFirstRequest, ...props }) => {
    const hasResources = props.resources?.length > 0;
    const hasFilter = Object.keys(query || {}).filter(key => key !== 'sort').length > 0;
    const isLoggedIn = !!user;
    const messageId = !hasResources && !isFirstRequest && !props.loading
        ? hasFilter && 'noResultsWithFilter'
            || isLoggedIn && 'noContentYet'
            || 'noPublicContent'
        : undefined;
    return <CardGrid { ...props } messageId={messageId}/>;
};

const ConnectedCardGrid = connect(
    createSelector([
        state => state?.gnsearch?.resources || DEFAULT_RESOURCES,
        state => state?.gnsearch?.loading || false,
        state => state?.gnsearch?.isNextPageAvailable || false,
        state => state?.gnsearch?.isFirstRequest
    ], (resources, loading, isNextPageAvailable, isFirstRequest) => ({
        resources,
        loading,
        isNextPageAvailable,
        isFirstRequest
    }))
)(CardGridWithMessageId);


const ConnectedDetailsPanel = connect(
    createSelector([
        state => state?.gnresource?.loading || false
    ], (loading) => ({
        loading
    }))
)(DetailsPanel);

const suggestionsRequestTypes = {
    resourceTypes: {
        filterKey: 'filter{resource_type.in}',
        loadOptions: (q, params) => getResourceTypes({ ...params, q }, 'filter{resource_type.in}')
            .then(results => ({
                options: results
                    .map(({ selectOption }) => selectOption)
            }))
            .catch(() => null)
    },
    categories: {
        filterKey: 'filter{category.identifier.in}',
        loadOptions: (q, params) => getCategories({ ...params, q }, 'filter{category.identifier.in}')
            .then(results => ({
                options: results
                    .map(({ selectOption }) => selectOption)
            }))
            .catch(() => null)
    },
    keywords: {
        filterKey: 'filter{keywords.slug.in}',
        loadOptions: (q, params) => getKeywords({ ...params, q }, 'filter{keywords.slug.in}')
            .then(results => ({
                options: results
                    .map(({ selectOption }) => selectOption)
            }))
            .catch(() => null)
    },
    regions: {
        filterKey: 'filter{regions.name.in}',
        loadOptions: (q, params) => getRegions({ ...params, q }, 'filter{regions.name.in}')
            .then(results => ({
                options: results
                    .map(({ selectOption }) => selectOption)
            }))
            .catch(() => null)
    },
    owners: {
        filterKey: 'filter{owner.username.in}',
        loadOptions: (q, params) => getOwners({ ...params, q }, 'filter{owner.username.in}')
            .then(results => ({
                options: results
                    .map(({ selectOption }) => selectOption)
            }))
            .catch(() => null)
    }
};

function getPageSize(width) {
    if (width < 968) {
        return 'sm';
    }
    if (width < 1400) {
        return 'md';
    }
    return 'lg';
}

function Home({
    location,
    theme,
    params,
    onSearch,
    menu,
    navbar,
    footer,
    hideHero,
    onSelect,
    match,
    filters,
    user,
    width,
    resource
}) {

    const pageSize = getPageSize(width);
    const isMounted = useRef();
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    const brandNavbarNode = useRef();
    const menuIndexNode = useRef();
    const filtersMenuNode = useRef();
    const footerNode = useRef();
    const [inViewRef, inView] = useInView();

    const brandNavbarHeight = brandNavbarNode.current
        ? brandNavbarNode.current.getBoundingClientRect().height
        : 0;
    const menuIndexNodeHeight = menuIndexNode.current
        ? menuIndexNode.current.getBoundingClientRect().height
        : 0;
    const filtersMenuNodeHeight = filtersMenuNode.current
        ? filtersMenuNode.current.getBoundingClientRect().height
        : 0;
    const footerNodeHeight = footerNode.current
        ? footerNode.current.getBoundingClientRect().height
        : 0;

    const dimensions = {
        brandNavbarHeight,
        menuIndexNodeHeight,
        filtersMenuNodeHeight,
        footerNodeHeight
    };

    const [showFilterForm, setShowFilterForm] = useState(true);
    const handleShowFilterForm = () => {
        return setShowFilterForm(!showFilterForm)
    }

    function handleUpdate(newParams, pathname) {
        const { query } = url.parse(location.search, true);
        onSearch({
            ...query,
            ...params,
            ...newParams
        }, pathname);
    }

    function handleClear() {
        const { query } = url.parse(location.search, true);
        const newParams = Object.keys(query)
            .reduce((acc, key) =>
                key.indexOf('filter') === 0
                    ? {
                        ...acc,
                        [key]: []
                    }
                    : acc, { extent: undefined });
        handleUpdate(newParams);
    }

    function handleFormatHref(options) {
        return hashLocationToHref({
            location,
            ...options
        });
    }

    const { query } = url.parse(location.search, true);

    const queryFilters = Object.keys(query).reduce((acc, key) => key.indexOf('filter') === 0
        ? [...acc, ...castArray(query[key]).map((value) => ({ key, value }))]
        : acc, []);

    const pk = match.params.pk;
    const ctype = match.params.ctype;

    useEffect(() => {
        onSelect(pk, ctype);
    }, [pk, ctype]);

    // update all the information of filter in use on mount
    // to display the correct labels
    const [reRender, setReRender] = useState(0);
    const state = useRef(false);
    state.current = {
        query
    };

    useEffect(() => {
        const suggestionsRequestTypesArray = Object.keys(suggestionsRequestTypes)
            .map((key) => suggestionsRequestTypes[key]);
        const queryKeys = Object.keys(state.current.query);
        let updateRequests = [];
        queryKeys.forEach(queryKey => {
            const suggestionRequest = suggestionsRequestTypesArray.find(({ filterKey }) => queryKey === filterKey);
            if (suggestionRequest) {
                const filtersToUpdate = castArray(state.current.query[queryKey]).filter((value) => !getFilterById(queryKey, value));
                if (filtersToUpdate?.length > 0) {
                    const request = suggestionRequest.loadOptions.bind(null, '', { idIn: filtersToUpdate });
                    updateRequests.push(request);
                }
            }
        });
        Promise.all(updateRequests.map((request) => request()))
            .then(() => {
                if (isMounted.current) {
                    setReRender(reRender + 1);
                }
            });
    }, []);

    const search = (
        <ConnectedSearchBar
            key="search"
            value={params.q || ''}
            //disableSuggestions={showFilterForm}
            style={{
                width: '100%',
                maxWidth: 716,
                margin: 'auto'
            }}
            onChange={(value) =>
                handleUpdate({
                    q: value
                }, '/search/')}
        >
        </ConnectedSearchBar>
    );

    const isHeroVisible = !hideHero && inView;

    return (
        <div className={`gn-home gn-theme-${theme?.variant || 'light'}`}>
            <BrandNavbar
                ref={brandNavbarNode}
                logo={castArray(navbar?.logo || [])
                    .map((logo) => ({
                        ...logo,
                        ...logo[pageSize]
                    }))}
                navItems={navbar?.items}
                inline={pageSize !== 'sm'}
                pageSize={pageSize}
                user={user}
                style={{
                    ...theme?.navbar?.style,
                    width
                }}
            >
                {!isHeroVisible && search}
            </BrandNavbar>
            {!hideHero && <Hero
                style={{
                    marginTop: dimensions.brandNavbarHeight,
                    ...theme?.hero?.style
                }}
                jumbotronStyle={theme?.jumbotron?.style}
            >
                <div ref={inViewRef}>
                    {isHeroVisible && search}
                </div>
            </Hero>}
            <MenuIndex
                ref={menuIndexNode}
                style={{
                    top: dimensions.brandNavbarHeight,
                    width
                }}
                user={user}
                query={query}
                leftItems={menu?.items || menu?.leftItems}
                rightItems={menu?.rightItems}
                formatHref={handleFormatHref}
                tools={<ConnectedLanguageSelector
                    inline={theme?.languageSelector?.inline}
                    style={theme?.languageSelector?.style}
                />}
            />
            <div className="gn-main-home container-fluid">
            <div className="row">
            <div className={`col-md-3 m-3 ${ !showFilterForm ? 'collapse' : ''}`}>
                <FilterForm
                    id="gn-filter-form"
                    query={query}
                    show={true}
                    onClose={handleShowFilterForm}
                    //onClick={handleShowFilterForm}
                    fields={filters?.fields?.options}
                    extentProps={filters?.extent}
                    onChange={handleUpdate}
                    suggestionsRequestTypes={suggestionsRequestTypes}
                />
            </div>

            <div className="col px-5 pl-md-2 pt-2">
            {!showFilterForm && <Button
                    variant="default"
                    onClick={handleShowFilterForm}
                >
                    <FaIcon name="filter"/>
                </Button>
            }
            <ConnectedCardGrid
                user={user}
                query={query}
                pageSize={pageSize}
                isColumnActive={!!resource}
                containerStyle={!isHeroVisible
                    ? {
                        marginTop: dimensions.brandNavbarHeight,
                        minHeight: `calc(100vh - ${dimensions.brandNavbarHeight + dimensions.menuIndexNodeHeight + dimensions.footerNodeHeight}px )`,
                        paddingBottom: dimensions.footerNodeHeight
                    }
                    : undefined}
                column={
                    <ConnectedDetailsPanel
                        resource={resource}
                        filters={queryFilters}
                        formatHref={handleFormatHref}
                        sectionStyle={{
                            width: pageSize === 'lg'
                                ? 700
                                : pageSize === 'md'
                                    ? 600
                                    : '100%',
                            ...(!isHeroVisible && {
                                position: 'fixed',
                                top: dimensions.brandNavbarHeight + dimensions.menuIndexNodeHeight,
                                bottom: dimensions.footerNodeHeight,
                                overflowY: 'scroll',
                                height: 'auto'
                            })
                        }}
                    />
                }
                isCardActive={res => res.pk === pk}
                page={params.page ? parseFloat(params.page) : 1}
                formatHref={handleFormatHref}
                onLoad={(value) => {
                    handleUpdate({
                        page: value
                    });
                }}
            >

                <FiltersMenu
                    ref={filtersMenuNode}
                    style={{
                        top: dimensions.brandNavbarHeight + dimensions.menuIndexNodeHeight
                    }}
                    formatHref={handleFormatHref}
                    order={query?.sort}
                    filters={queryFilters}
                    onClear={handleClear}
                    orderOptions={filters?.order?.options}
                    defaultLabelId={filters?.order?.defaultLabelId}
                />

            </ConnectedCardGrid>
            </div>
            </div>
            </div>
            <Footer
                ref={footerNode}
                footerItems={footer.items}
                style={theme?.footer?.style}
            />
        </div>
    );
}

Home.propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    plugins: PropTypes.object,
    pluginsConfig: PropTypes.array,
    background: PropTypes.object,
    logo: PropTypes.array,
    jumbotron: PropTypes.object
};

Home.defaultProps = {
    background: {},
    logo: [],
    jumbotron: {}
};

const DEFAULT_PARAMS = {};

const ConnectedHome = connect(
    createSelector([
        state => state?.gnsearch?.params || DEFAULT_PARAMS,
        state => state?.security?.user || null,
        state => state?.gnresource?.data || null
    ], (params, user, resource) => ({
        params,
        user,
        resource
    })),
    {
        onSearch: searchResources,
        onSelect: requestResource
    }
)(withResizeDetector(Home));

export default ConnectedHome;
