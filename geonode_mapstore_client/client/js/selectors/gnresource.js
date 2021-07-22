/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const getResourceId = (state) => {
    const resourceId = state?.gnresource?.id;
    const resourcePk = state?.gnresource?.data?.pk;
    return resourceId || resourcePk;
};

export const getResourcePerms = (state) => {
    return state?.gnresource?.data?.perms || [];
};

export const getResourceName = (state) => {
    return state?.gnresource?.data?.name || false;
};

export const getResourceDescription = (state) => {
    return state?.gnresource?.data?.abstract || false;
};

export const getResourceThumbnail = (state) => {
    return state?.gnresource?.data?.thumbnail_url || false;
};

export const canEditResource = (state) => {
    const canEdit = state?.gnresource?.permissions?.canEdit;
    const perms = state?.gnresource?.data?.perms || [];
    return canEdit || perms.includes('change_resourcebase');
};

export const canViewResource = (state) => {
    const canView = state?.gnresource?.permissions?.canView;
    const perms = state?.gnresource?.data?.perms || [];
    return canView || perms.includes('view_resourcebase');
};

export const canAddResource = () => {
    return (state) => state?.security?.user?.perms?.includes("add_resource");
};


export const isNewResource = (state) => {
    return !!state?.gnresource?.isNew;
};
