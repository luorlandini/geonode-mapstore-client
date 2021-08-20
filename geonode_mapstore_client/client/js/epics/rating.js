/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Observable } from 'rxjs';
import {
    resourceError,
    updateResourceProperties,
    SET_RATING_RESOURCES
} from '@js/actions/gnresource';
import {
    setRatingResource
} from '@js/api/geonode/v2';

const gnSaveRatingContent = (action$, store) =>
    action$.ofType(SET_RATING_RESOURCES)
        .switchMap((action) => {
            const state = store.getState();
            const pk = state?.gnresource?.data.pk;
            const rating =  action.rating;
            return Observable
                //.defer(() => setRatingResource(pk, rating))
                .defer(() => console.log(`rating ${rating}`))
                .switchMap(() => {
                    return Observable.of(
                        updateResourceProperties({
                            'rating': rating
                        })
                    );
                })
                .catch((error) => {
                    return Observable.of(resourceError(error.data || error.message));
                });

        });


export default {
    gnSaveRatingContent
};
