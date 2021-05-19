/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';
import Thumbnail from '@mapstore/framework/components/misc/Thumbnail';
import FaIcon from '@js/components/home/FaIcon';

const ImagesEditable = ({
    defaultImage,
    onEdit = () => {}
}) => {

    const [thumbnail, setThumbnail] =  useState();
    useEffect(() => {
        setThumbnail(defaultImage);

    }, [ ]);

    return (
        <>
            <Thumbnail
                thumbnail={thumbnail}
                onUpdate={(data) => {
                    setThumbnail(data);
                    onEdit(data);
                }}

            />
            <div className={`icon-image-preview`} >
                <FaIcon name="file-upload" />
            </div>
        </>
    );
};

export default ImagesEditable;
