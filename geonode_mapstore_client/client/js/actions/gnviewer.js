/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const REQUEST_DATASET_CONFIG = 'GEONODE_VIEWER:REQUEST_DATASET_CONFIG';
export const REQUEST_MAP_CONFIG = 'GEONODE_VIEWER:REQUEST_MAP_CONFIG';
export const REQUEST_NEW_MAP_CONFIG = 'GEONODE_VIEWER:REQUEST_NEW_MAP_CONFIG';
export const REQUEST_GEOSTORY_CONFIG = 'GEONODE_VIEWER:REQUEST_GEOSTORY_CONFIG';
export const REQUEST_DOCUMENT_CONFIG = 'GEONODE_VIEWER:REQUEST_DOCUMENT_CONFIG';
export const REQUEST_NEW_GEOSTORY_CONFIG = "GEONODE:VIEWER:REQUEST_NEW_GEOSTORY_CONFIG";


export function requestDatasetConfig(pk, page) {
    return {
        type: REQUEST_DATASET_CONFIG,
        pk,
        page
    };
}

export function requestNewGeostoryConfig() {
    return {
        type: REQUEST_NEW_GEOSTORY_CONFIG
    };
}

export function requestMapConfig(pk) {
    return {
        type: REQUEST_MAP_CONFIG,
        pk
    };
}

export function requestNewMapConfig() {
    return {
        type: REQUEST_NEW_MAP_CONFIG
    };
}


export function requestGeoStoryConfig(pk) {
    return {
        type: REQUEST_GEOSTORY_CONFIG,
        pk
    };
}

export function requestDocumentConfig(pk) {
    return {
        type: REQUEST_DOCUMENT_CONFIG,
        pk
    };
}
