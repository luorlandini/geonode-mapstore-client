/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import url from 'url';
import { createSelector } from 'reselect';
import castArray from 'lodash/castArray';
import { loadLocale } from '@mapstore/framework/actions/locale';
import { currentLocaleSelector } from '@mapstore/framework/selectors/locale';
import SearchBar from '@js/components/home/SearchBar';
import BrandNavbar from '@js/components/home/BrandNavbar';
import Hero from '@js/components/home/Hero';
import ActionNavBar from '@js/components/ActionNavbar';
import MenuIndex from '@js/components/home/MenuIndex';
import CardGrid from '@js/components/home/CardGrid';
import DetailsPanel from '@js/components/home/DetailsPanel';
import FiltersMenu from '@js/components/home/FiltersMenu';
import FilterForm from '@js/components/home/FilterForm';
import LanguageSelector from '@js/components/home/LanguageSelector';
import { getMonitoredState, handleExpression } from '@mapstore/framework/utils/PluginsUtils';
import { getConfigProp } from "@mapstore/framework/utils/ConfigUtils";
import { filterMenuItems, mapObjectFunc, reduceArrayRecursive } from '@js/utils/MenuUtils';

import get from 'lodash/get';
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
import useLocalStorage from '@js/hooks/useLocalStorage';
import  { toggleFiltersPanel }  from '@js/actions/gnfiltersPanel';


const DEFAULT_SUGGESTIONS = [];
const DEFAULT_RESOURCES = [];
const REDIRECT_NOT_ALLOWED = ['/', '/search/'];
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


const ConnectedFilterForm = connect(
    createSelector([
        state => state?.gnfiltersPanel?.isToggle || false
    ], (isToggle) => ({
        isToggle
    })),
    {
        onToggleFilters: toggleFiltersPanel
    }
)(FilterForm);


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
    onToggleFilters,
    isToggle,
    monitoredUserState,
    geoNodeConfiguration,
    navbar,
    hideHero,
    isFilterForm,
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
    const filterFormNode = useRef();
    const heroNode = useRef();

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

    const heroNodeHeight = heroNode.current
        ? heroNode.current.getBoundingClientRect().height
        : 0;

    const filterFormOffset = filterFormNode.current
        ? filterFormNode?.current?.offsetTop
        : 0;


    const dimensions = {
        brandNavbarHeight,
        menuIndexNodeHeight,
        filtersMenuNodeHeight,
        footerNodeHeight,
        heroNodeHeight
    };


    const getMonitorState = (path) => {
        return get(monitoredUserState, path);
    };


    const [cardLayoutStyle, setCardLayoutStyle] = useLocalStorage('layoutCardsStyle');
    const [showFilterForm, setShowFilterForm] = useState( (isFilterForm && isToggle) || false);

    const handleShowFilterForm = () => {
        if (!REDIRECT_NOT_ALLOWED.includes(location.pathname)) {
            window.location = `#/search/${location.search}`;
            return;
        }
        setShowFilterForm(!showFilterForm);
        onToggleFilters();

    };

    const handleStoredLayoutStyle = () => {
        let styleCard = cardLayoutStyle === 'grid' ? 'list' : 'grid';
        setCardLayoutStyle(styleCard);
    };


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

    const userState = {
        user
    };
    const confWithHandleExpression = mapObjectFunc(v => handleExpression(getMonitorState, {}, v))(geoNodeConfiguration);
    const menuItemsLeftAllowed = reduceArrayRecursive(confWithHandleExpression?.menu?.items, (item) => filterMenuItems(userState, item));
    const menuItemsRightAllowed = reduceArrayRecursive(confWithHandleExpression?.menu?.rightItems, (item) => filterMenuItems(userState, item));
    const navebarItemsAllowed = reduceArrayRecursive(confWithHandleExpression?.navbar?.items, (item) => filterMenuItems(userState, item));
    const filterMenuItemsAllowed = reduceArrayRecursive(confWithHandleExpression?.cardsMenu?.items, (item) => filterMenuItems(userState, item));
    const footerMenuItemsAllowed = reduceArrayRecursive(confWithHandleExpression?.footer?.items, (item) => filterMenuItems(userState, item));

    const search = (
        <ConnectedSearchBar
            key="search"
            value={params.q || ''}
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
    const stickyFiltersMaxHeight = (window.innerHeight - dimensions.brandNavbarHeight - dimensions.menuIndexNodeHeight - dimensions.footerNodeHeight);
    return (
        <div className={`gn-home gn-theme-${theme?.variant || 'light'}`}>
            <BrandNavbar
                ref={brandNavbarNode}
                logo={castArray(navbar?.logo || [])
                    .map((logo) => ({
                        ...logo,
                        ...logo[pageSize]
                    }))}
                navItems={navebarItemsAllowed}
                inline={pageSize !== 'sm'}
                pageSize={pageSize}
                style={{
                    ...theme?.navbar?.style,
                    width
                }}
            >
                {!isHeroVisible && search}
            </BrandNavbar>
            {!hideHero && <Hero
                ref={heroNode}
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
            {/*
            <MenuIndex
                ref={menuIndexNode}
                style={{
                    top: dimensions.brandNavbarHeight,
                    width
                }}
                getMonitorState={getMonitorState}
                query={query}
                leftItems={menuItemsLeftAllowed || []}
                rightItems={menuItemsRightAllowed || []}
                formatHref={handleFormatHref}
                tools={<ConnectedLanguageSelector
                    inline={theme?.languageSelector?.inline}
                    style={theme?.languageSelector?.style}
                />}
            />
                */}
            <ActionNavBar
                ref={menuIndexNode}
                style={{
                    top: dimensions.brandNavbarHeight,
                    width
                }}
                getMonitorState={getMonitorState}
                query={query}
                leftItems={menuItemsLeftAllowed || []}
                rightItems={menuItemsRightAllowed || []}
                formatHref={handleFormatHref}
            />
            <div className="gn-main-home">

                <div className="gn-container">
                    <div className="gn-row">
                        {showFilterForm && <div ref={filterFormNode} id="gn-filter-form-container" className={`gn-filter-form-container`}>
                            <ConnectedFilterForm
                                key="gn-filter-form"
                                id="gn-filter-form"
                                styleContanierForm={ hideHero ? { marginTop: dimensions.brandNavbarHeight, top: (filterFormOffset + dimensions.brandNavbarHeight), maxHeight: stickyFiltersMaxHeight } :
                                    { top: (filterFormOffset - dimensions.heroNodeHeight), maxHeight: stickyFiltersMaxHeight }}
                                show
                                fields={filters?.fields?.options}
                                links={filters?.fields?.links}
                                extentProps={filters?.extent}
                                suggestionsRequestTypes={suggestionsRequestTypes}
                                query={query}
                                onChange={handleUpdate}
                                onClose={handleShowFilterForm}
                            />

                        </div>
                        }

                        <div className="gn-grid-container">
                            <ConnectedCardGrid
                                user={user}
                                query={query}
                                pageSize={pageSize}
                                isColumnActive={!!resource}
                                containerStyle={!isHeroVisible
                                    ? {
                                        marginTop: hideHero && dimensions.brandNavbarHeight,
                                        minHeight: `calc(100vh - ${dimensions.brandNavbarHeight + dimensions.menuIndexNodeHeight + dimensions.footerNodeHeight}px )`,
                                        paddingBottom: dimensions.footerNodeHeight
                                    }
                                    : undefined}
                                column={ hideHero &&
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
                                    cardsMenu={filterMenuItemsAllowed || []}
                                    order={query?.sort}
                                    filters={queryFilters}
                                    onClear={handleClear}
                                    onClick={handleShowFilterForm}
                                    layoutSwitcher={handleStoredLayoutStyle}
                                    orderOptions={filters?.order?.options}
                                    defaultLabelId={filters?.order?.defaultLabelId}
                                />

                            </ConnectedCardGrid>
                        </div>
                    </div>
                </div>


            </div>
            <Footer
                ref={footerNode}
                footerItems={footerMenuItemsAllowed || []}
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
        state => state?.gnresource?.data || null,
        state => state?.gnfiltersPanel?.isToggle || false,
        state => getMonitoredState(state, getConfigProp('monitorState'))
    ], (params, user, resource, isToggle, monitoredUserState) => ({
        params,
        user,
        resource,
        isToggle,
        monitoredUserState
    })),
    {
        onSearch: searchResources,
        onSelect: requestResource,
        onToggleFilters: toggleFiltersPanel
    }
)(withResizeDetector(Home));

export default ConnectedHome;
