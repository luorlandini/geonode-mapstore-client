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
import {
    editTitleResource,
    editAbstractResource,
    editThumbnailResource
} from '@js/actions/gnresource';
import controls from '@mapstore/framework/reducers/controls';
import {toggleControl} from '@mapstore/framework/actions/controls';
import gnresource from '@js/reducers/gnresource';
import Message from '@mapstore/framework/components/I18N/Message';
import { canEditResource } from '@js/selectors/gnresource';
import Button from '@js/components/Button';

const ConnectedDetailsPanel = connect(
    createSelector([
        state => state?.gnresource?.data || null,
        state => state?.gnresource?.loading || false
    ], (resource, loading, editMode) => ({
        resource,
        loading,
        editMode
    })),
    {
        closePanel: toggleControl.bind(null, 'DetailViewer', null)
    }
)(DetailsPanel);

const ButtonViewer = ({onClick, isEnabledViewer}) => {

    const handleClickButton = () => {
        onClick();
    };

    return (<Button
        variant="primary"
        onClick={handleClickButton}
        active={!isEnabledViewer}> <Message msgId="gnviewer.details"/>
    </Button>);
};

const ConnectedButton = connect(
    createSelector([
        state => state?.controls?.DetailViewer?.enabled || false
    ],
    (isEnabledViewer) => ({isEnabledViewer})),
    {
        onClick: toggleControl.bind(null, 'DetailViewer', null)
    }
)((ButtonViewer));


function DetailViewer({
    enabled,
    onEditResource,
    onEditAbstractResource,
    onEditThumbnail,
    canEdit
}) {

    const handleTitleValue = (val) => {
        onEditResource(val);
    };

    const handleAbstractValue = (val) => {
        onEditAbstractResource(val);
    };
    const handleEditThumbnail = (val) => {
        onEditThumbnail(val);
    };

    return (
        <div
            style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'

            }}>
            { !enabled && <ConnectedDetailsPanel
                editTitle={handleTitleValue}
                editAbstract={handleAbstractValue}
                editThumbnail={handleEditThumbnail}
                activeEditMode={!enabled && canEdit}
                sectionStyle={{
                    width: '600px',
                    position: 'fixed'
                }}
            /> }
        </div>
    );
}

const DetailViewerPlugin = connect(
    createSelector([
        state => state?.controls?.DetailViewer?.enabled || false,
        canEditResource
    ], (enabled, canEdit) => ({
        enabled,
        canEdit
    })),
    {
        onEditResource: editTitleResource,
        onEditAbstractResource: editAbstractResource,
        onEditThumbnail: editThumbnailResource
    }
)(DetailViewer);


export default createPlugin('DetailViewer', {
    component: DetailViewerPlugin,
    containers: {
        ViewerLayout: {
            name: 'DetailViewer',
            target: 'rightColumn',
            priority: 1
        },
        ActionNavbar: {
            name: 'ButtonViewer',
            target: 'leftMenuItem',
            Component: ConnectedButton,
            priority: 1
        }
    },
    epics: {},
    reducers: {
        gnresource,
        controls
    }
});
