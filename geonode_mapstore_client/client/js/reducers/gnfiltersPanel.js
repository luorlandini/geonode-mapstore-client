/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { SHOW, HIDE } from '@js/actions/gnfilters';

export const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
    case SHOW:
        return {
            ...state,
            isToggle: true
        };
    case HIDE:
        return {
            ...state,
            isToggle: false
        };
    default:
        return state;
    }
};
