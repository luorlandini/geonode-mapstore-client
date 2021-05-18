/* eslint-disable react/jsx-boolean-value */

/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useEffect} from 'react';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { connect } from 'react-redux';
import FaIcon from '@js/components/home/FaIcon';
import { createSelector } from 'reselect';
import DetailsPanel from '@js/components/home/DetailsPanel';
import {TextEditable, RichTextEditable, ImagesEditable} from '@js/components/ContentsEditable/';
import { editTitleResource, editAbstractResource, editImageResource } from '@js/actions/gnresource';

import gnresource from '@js/reducers/gnresource';


const ConnectedDetailsPanel = connect(
    createSelector([
        state => state?.gnresource?.data || null,
        state => state?.gnresource?.loading || false
    ], (resource, loading) => ({
        resource,
        loading
    }))
)(DetailsPanel);


function DetailViewer({onEditResource, onEditAbstractResource, onEditImage}) {

    const [editMode, setEditMode] = useState(false);
    const [iconEditMode,  iconSetEditMode] = useState('edit');

    const handleChangeValue = (val) => {
        onEditResource(val);
    };

    const handleAbstractValue = (val) => {
        onEditAbstractResource(val);
    };
    const handleEditImage = (val) => {
        onEditImage(val);
    };


    const editTitle = (value) => {
        return (
            <div className="editContainer">
                <h1><TextEditable  onEdit={ handleChangeValue } text={value} /></h1>
            </div>);
    };

    const editAbstract = (abstract) => (
        <div className="editContainer">
            <TextEditable onEdit={ handleAbstractValue } text={abstract} />
        </div>

    );

    const editImage = (image) => (
        <div className="editContainer imagepreview">
            <ImagesEditable onEdit={handleEditImage} defaultImage={image} />
        </div>

    );

    const handleEditMode = () => {
        setEditMode(!editMode);
    };

    useEffect(() => {

        (editMode) ? iconSetEditMode('eye') : iconSetEditMode('edit');

    }, [editMode]);

    return (
        <div
            style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'

            }}>
            <div
                className={`gn-edit-toogle`}
                style={{
                    display: 'flex',
                    flex: 1
                }}  >
                <button onClick={handleEditMode} type="button" className="btn" >
                    <FaIcon name={iconEditMode} />
                </button>
            </div>
            <ConnectedDetailsPanel
                editable={editMode}
                editTitle={editTitle}
                editAbstract={editAbstract}
                editImage={editImage}
                sectionStyle={{
                    width: '600px',
                    position: 'fixed',
                    overflowY: 'scroll',
                    height: '750px'

                }}
            />
        </div>
    );
}

const DetailViewerPlugin = connect(
    createSelector([
    ], () => ({})),
    {
        onEditResource: editTitleResource,
        onEditAbstractResource: editAbstractResource,
        onEditImage: editImageResource

    }
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
    reducers: {
        gnresource
    }
});
