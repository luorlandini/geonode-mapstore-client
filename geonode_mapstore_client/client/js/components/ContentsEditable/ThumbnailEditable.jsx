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
import Button from '@js/components/Button';
import Message from '@mapstore/framework/components/I18N/Message';
import tooltip from '@mapstore/framework/components/misc/enhancers/tooltip';
const UploadImageButton = tooltip(Button);

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

            />
            <UploadImageButton
                variant="default"
                className="upload-thumbnail"
                tooltipPosition={"top"}
                tooltip={  <Message msgId="gnviewer.uploadImage"/>  }

            >
                <FaIcon name="upload" />
            </UploadImageButton>
        </>
    );
};

export default ThumbnailEditable;
