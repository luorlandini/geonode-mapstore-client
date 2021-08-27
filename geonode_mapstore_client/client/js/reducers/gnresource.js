/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import isEqual from 'lodash/isEqual';
import {
    RESOURCE_LOADING,
    SET_RESOURCE,
    RESOURCE_ERROR,
    UPDATE_RESOURCE_PROPERTIES,
    SET_RESOURCE_TYPE,
    SET_NEW_RESOURCE,
    SET_RESOURCE_ID,
    SET_RESOURCE_PERMISSIONS,
    EDIT_TITLE_RESOURCE,
    EDIT_ABSTRACT_RESOURCE,
    EDIT_THUMBNAIL_RESOURCE,
    SET_SELECTED_DATASET_PERMISSIONS,
    RESET_RESOURCE_STATE,
    LOADING_RESOURCE_CONFIG,
    RESOURCE_CONFIG_ERROR,
    SET_RESOURCE_COMPACT_PERMISSIONS,
    UPDATE_RESOURCE_COMPACT_PERMISSIONS,
    RESET_GEO_LIMITS
} from '@js/actions/gnresource';

import {
    cleanCompactPermissions,
    getGeoLimitsFromCompactPermissions
} from '@js/utils/ResourceUtils';

const defaultState = {
    selectedLayerPermissions: [],
    data: {},
    permissions: []
};

function gnresource(state = defaultState, action) {
    switch (action.type) {
    case RESET_RESOURCE_STATE: {
        return defaultState;
    }
    case LOADING_RESOURCE_CONFIG: {
        return {
            ...state,
            configError: undefined,
            loadingResourceConfig: action.loading
        };
    }
    case RESOURCE_CONFIG_ERROR: {
        return {
            ...state,
            loading: false,
            configError: action.message
        };
    }
    case RESOURCE_LOADING: {
        return {
            ...state,
            loading: true
        };
    }
    case SET_RESOURCE: {
        const { data, ...resource } = action.data || {};
        return {
            ...state,
            error: null,
            initialResource: { ...action.data },
            data: resource,
            loading: false,
            isNew: false
        };
    }
    case RESOURCE_ERROR: {
        return {
            ...state,
            initialResource: null,
            data: null,
            error: action.error,
            loading: false
        };
    }
    case UPDATE_RESOURCE_PROPERTIES: {
        return {
            ...state,
            data: {
                ...state.data,
                ...action.properties
            }
        };
    }
    case SET_RESOURCE_TYPE: {
        return {
            ...state,
            type: action.resourceType
        };
    }
    case SET_NEW_RESOURCE: {
        return {
            ...defaultState,
            isNew: true
        };
    }
    case SET_RESOURCE_ID: {
        return {
            ...state,
            id: action.id
        };
    }
    case SET_RESOURCE_PERMISSIONS: {
        return {
            ...state,
            permissions: action.permissions
        };
    }

    case EDIT_TITLE_RESOURCE: {
        return {
            ...state,
            data: {
                ...state?.data,
                title: action?.title,
                name: action?.title
            }
        };
    }

    case EDIT_ABSTRACT_RESOURCE: {
        return {
            ...state,
            data: {
                ...state?.data,
                "abstract": action?.abstract
            }
        };
    }

    case EDIT_THUMBNAIL_RESOURCE: {
        return {
            ...state,
            data: {
                ...state?.data,
                thumbnail_url: action?.thumbnailUrl
            }
        };
    }

    case SET_SELECTED_DATASET_PERMISSIONS:
        return {
            ...state,
            selectedLayerPermissions: action.permissions
        };

    case SET_RESOURCE_COMPACT_PERMISSIONS:
        return {
            ...state,
            initialCompactPermissions: action.compactPermissions,
            compactPermissions: action.compactPermissions,
            isCompactPermissionsChanged: false,
            geoLimits: []
        };

    case UPDATE_RESOURCE_COMPACT_PERMISSIONS:
        return {
            ...state,
            compactPermissions: action.compactPermissions,
            isCompactPermissionsChanged: !isEqual(
                cleanCompactPermissions(state.initialCompactPermissions),
                cleanCompactPermissions(action.compactPermissions)
            ),
            geoLimits: getGeoLimitsFromCompactPermissions(action.compactPermissions)
        };
    case RESET_GEO_LIMITS:
        if (state.compactPermissions) {
            const { users, organizations, groups } = state.compactPermissions;
            return {
                ...state,
                compactPermissions: {
                    users: users.map(({ features, ...properties }) => properties),
                    organizations: organizations.map(({ features, ...properties }) => properties),
                    groups: groups.map(({ features, ...properties }) => properties)
                },
                geoLimits: []
            };
        }
        return state;
    default:
        return state;
    }
}

export default gnresource;
