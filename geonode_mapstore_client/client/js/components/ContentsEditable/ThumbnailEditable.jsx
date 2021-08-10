/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';
import Thumbnail from '@mapstore/framework/components/misc/Thumbnail';
import FaIcon from '@js/components/FaIcon';
import Message from '@mapstore/framework/components/I18N/Message';
import Button from '@js/components/Button';

const ThumbnailEditable = ({
    defaultImage,
    onEdit = () => {}
}) => {

    const [thumbnail, setThumbnail] =  useState();
    useEffect(() => {
        setThumbnail(defaultImage);

    }, [defaultImage]);

    return (
        <>
            <Thumbnail
                thumbnail={thumbnail}
                onUpdate={(data) => {
                    setThumbnail(data);
                    onEdit(data);
                }}
                message={<Message msgId="gnviewer.uploadImage"/>}
            />
            <Button
                variant="default"

            >
                <FaIcon name="upload" />
            </Button>
        </>
    );
};

export default ThumbnailEditable;
