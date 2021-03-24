/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/



import { SHOW, HIDE } from '@js/actions/filters';


export default (state, action) => {

    switch (action.type) {
        case "ON_TOGGLE_FILTER":
          return {
            ...state,
            onToggle: !state.onToggle
        };
        default:
          return state
      }
};
