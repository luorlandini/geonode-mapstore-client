/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { ON_TOGGLE_FILTER } from '@js/actions/gnfilters';

function gnfilters (state = {isToggle: false}, action) {
    switch (action.type) {
        case ON_TOGGLE_FILTER:
          return {
            ...state,
            isToggle: !state.isToggle
        };
        default:
          return state
      }
};

export default gnfilters