/* eslint-disable react/jsx-boolean-value */
/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import ImageUploader from "react-images-upload";

const ImagesEditable = ({defaultImage}) => {

    /*
    const [pictures, setPictures] = useState([]);

    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };
    */
    return (
        <ImageUploader
            withIcon={false}
            withLabel={false}
            withPreview={true}
            onChange={() => console.log('onChange') }
            //imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            //maxFileSize={5242880}
            defaultImage={true}
            defaultImages={[defaultImage]}
            singleImage={true}
        />
    );
};

export default ImagesEditable;
