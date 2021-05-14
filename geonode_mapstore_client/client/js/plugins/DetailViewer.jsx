
/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import DetailsPanel from '@js/components/home/DetailsPanel';
import DropdownList from '@js/components/Menu/DropdownList';

const DetailViewerMenuItem = ({items}) => {

    return (
        <DropdownList
                items={items}
            />
    )
}


const ConnectedDetailsPanel = connect(
    createSelector([
        state => state?.gnresource?.data || null,
        state => state?.gnresource?.loading || false
    ], (resource, loading) => ({
        resource,
        loading
    }))
)(DetailsPanel);


function DetailViewer({}) {
    // placeholder plugin component
    return (
        <div
            style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#f2f0f0',
            }}>
            <ConnectedDetailsPanel
                sectionStyle={{
                        width: '600px',
                        position: 'fixed',
                        overflowY: 'scroll',
                        height: 'auto'

                }}
            />
        </div>
    );
}

const DetailViewerPlugin = connect(
    createSelector([], () => ({})),
    {}
)(DetailViewer);


export default createPlugin('DetailViewer', {
    component: DetailViewerPlugin,
    containers: {
        ViewerLayout: {
            name: 'DetailViewer',
            target: 'rightColumn',
            priority: 1
        }
    },
    epics: {},
    reducers: {}
});



        /*
        ActionNavbar: {
            name: 'DetailViewerMenuItem',
            target: 'dropdown.edit', // we should find a way to target an existing dropdown
            Tool: ConnectedDetailViewerMenuItem, // The toggle button
            priority: 1
        }
        */
