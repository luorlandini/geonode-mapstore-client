/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const SHOW = "FILTER_PANEL:SHOW";
export const HIDE = "FILTER_PANEL:HIDE";

export const show = () => ({ type: SHOW });

export const hide = () => ({ type: HIDE });
