/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import { Nav } from 'react-bootstrap-v1';
import Message from '@mapstore/framework/components/I18N/Message';
import {
    readProperty,
    filterMenuItems
} from '@js/utils/MenuUtils';
import MenuItem from '@js/components/Menu/MenuItem'

const Footer = forwardRef(({
    footerItems,
    user,
    style
}, ref) => {
    const state = {
        user
    };
    return (
        <footer
            ref={ref}
            className="gn-footer"
            style={style}
        >
            <div>
                <ul>
                    {footerItems
                        .filter((item) => filterMenuItems(state, item))
                        .map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <MenuItem
                                        item={{ ...item, id: item.id || idx }}
                                        menuItemsProps={{
                                            state
                                        }}
                                    />
                                </li>
                            );
                        })}
                </ul>
            </div>
        </footer>
    );
});

Footer.defaultProps = {
    footerItems: []
};

export default Footer;
