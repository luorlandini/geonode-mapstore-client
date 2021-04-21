/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import castArray from 'lodash/castArray';
import isNil from 'lodash/isNil';
import ReactResizeDetector from 'react-resize-detector';
import SwipeMenu from '@js/components/home/SwipeMenu';
import Tag from '@js/components/home/Tag';
import { Dropdown, Badge } from 'react-bootstrap-v1';
import Message from '@mapstore/framework/components/I18N/Message';
import { useSwipeControls } from '@mapstore/framework/components/geostory/navigation/ScrollMenu';
import { withResizeDetector } from 'react-resize-detector';
import {
    readProperty,
    filterMenuItems
} from '@js/utils/MenuUtils';

import MenuItem from './MenuItem';

const Menu = ({
    items,
    containerClass,
    childrenClass,
    user,
    query,
    formatHref
}) => {

    const state = {
        user
    };

    return (
        <ul className={`${containerClass}`}>
            {items
                .filter((item) => filterMenuItems(state, item))
                .map((item, idx) => {
                    return (
                        <li key={idx}>
                            <MenuItem
                                item={{ ...item, id: item.id || idx }}
                                menuItemsProps={{
                                    query,
                                    formatHref,
                                    state
                                }}
                                classItem={childrenClass}
                            />
                        </li>
                    );
                })}
        </ul>
    )
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    containerClass: PropTypes.string,
    childrenClass: PropTypes.string,
    user: PropTypes.object,
    query: PropTypes.string,
    formatHref: PropTypes.func,

}

Menu.defaultProps = {
    items: [],
    query: {},
    user: undefined,
    formatHref: () => '#'
};


export default Menu;