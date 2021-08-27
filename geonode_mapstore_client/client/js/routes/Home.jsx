/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import url from 'url';
import { createSelector } from 'reselect';
import FiltersMenu from '@js/components/FiltersMenu';
import { getParsedGeoNodeConfiguration } from "@js/selectors/config";
import { userSelector } from '@mapstore/framework/selectors/security';
import { buildHrefByTemplate } from '@js/utils/MenuUtils';
import {
    searchResources,
    loadFeaturedResources
} from '@js/actions/gnsearch';
import FeaturedList from '@js/components/FeaturedList';

import {
    hashLocationToHref,
    clearQueryParams,
    getQueryFilters
} from '@js/utils/SearchUtils';
import { withResizeDetector } from 'react-resize-detector';

import {
    getThemeLayoutSize
} from '@js/utils/AppUtils';

import ConnectedCardGrid from '@js/routes/catalogue/ConnectedCardGrid';
import { getFeaturedResults } from '@js/selectors/search';
import DeleteResource from '@js/plugins/DeleteResource';
import SaveAs from '@js/plugins/SaveAs';
const { DeleteResourcePlugin } = DeleteResource;
const { SaveAsPlugin } = SaveAs;

const ConnectedFeatureList = connect(
    createSelector([
        getFeaturedResults,
        state => state?.gnsearch?.featuredResources?.page || 1,
        state => state?.gnsearch?.featuredResources?.isNextPageAvailable || false,
        state => state?.gnsearch?.featuredResources?.isPreviousPageAvailable || false,
        state => state?.gnsearch?.featuredResources?.loading || false
    ], (resources, page, isNextPageAvailable, isPreviousPageAvailable, loading) => ({
        resources, page, isNextPageAvailable, isPreviousPageAvailable, loading})
    ), {loadFeaturedResources}
)(FeaturedList);

function Home({
    location,
    params,
    onSearch,
    config,
    user,
    width,
    totalResources,
    fetchFeaturedResources = () => {}
}) {

    const cataloguePage = '/catalogue/';

    const {
        filterMenuItemsAllowed,
        cardOptionsItemsAllowed,
        filters
    } = config;

    const pageSize = getThemeLayoutSize(width);

    const handleShowFilterForm = () => {
        window.location = `${cataloguePage}#/search/filter/${location.search}`;
    };

    function handleUpdate(newParams, pathname) {
        const { query } = url.parse(location.search, true);
        onSearch({
            ...query,
            ...newParams
        }, pathname);
    }

    function handleClear() {
        const newParams = clearQueryParams(location);
        handleUpdate(newParams);
    }

    function handleFormatHref(options) {
        return cataloguePage + hashLocationToHref({
            location,
            ...options
        });
    }

    const { query } = url.parse(location.search, true);
    const queryFilters = getQueryFilters(query);

    return (
        <div className="gn-container">
            <div className="gn-row gn-home-section">
                <div className="gn-grid-container">
                    <ConnectedFeatureList
                        query={query}
                        formatHref={handleFormatHref}
                        buildHrefByTemplate={buildHrefByTemplate}
                        onLoad={fetchFeaturedResources}
                        containerStyle={{
                            minHeight: 'auto'
                        }}/>

                </div>
            </div>
            <div className="gn-row">
                <div className="gn-grid-container">
                    <ConnectedCardGrid
                        user={user}
                        query={query}
                        pageSize={pageSize}
                        cardOptions={cardOptionsItemsAllowed}
                        buildHrefByTemplate={buildHrefByTemplate}
                        page={params.page ? parseFloat(params.page) : 1}
                        formatHref={handleFormatHref}
                        onLoad={(value) => {
                            handleUpdate({
                                page: value
                            });
                        }}
                    >
                        <FiltersMenu
                            formatHref={handleFormatHref}
                            cardsMenu={filterMenuItemsAllowed || []}
                            order={query?.sort}
                            onClear={handleClear}
                            onClick={handleShowFilterForm}
                            orderOptions={filters?.order?.options}
                            defaultLabelId={filters?.order?.defaultLabelId}
                            totalResources={totalResources}
                            totalFilters={queryFilters.length}
                            filtersActive={!!(queryFilters.length > 0)}
                        />
                    </ConnectedCardGrid>
                </div>
            </div>
            <DeleteResourcePlugin />
            <SaveAsPlugin closeOnSave labelId="gnviewer.clone"/>
        </div>
    );
}

Home.propTypes = {
    location: PropTypes.object,
    params: PropTypes.object,
    onSearch: PropTypes.func,
    config: PropTypes.object,
    user: PropTypes.object,
    width: PropTypes.number,
    totalResources: PropTypes.object,
    fetchFeaturedResources: PropTypes.func
};

Home.defaultProps = {
    onSearch: () => {},
    fetchFeaturedResources: () => {}
};

const DEFAULT_PARAMS = {};

const ConnectedHome = connect(
    createSelector([
        state => state?.gnsearch?.params || DEFAULT_PARAMS,
        userSelector,
        getParsedGeoNodeConfiguration,
        state => state?.gnsearch?.total || 0
    ], (params, user, config, totalResources) => ({
        params,
        user,
        config,
        totalResources
    })),
    {
        onSearch: searchResources,
        fetchFeaturedResources: loadFeaturedResources
    }
)(withResizeDetector(Home));

export default ConnectedHome;
