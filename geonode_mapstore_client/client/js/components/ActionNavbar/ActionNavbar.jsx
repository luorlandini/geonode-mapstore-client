/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import Menu from '@js/components/Menu';


const ActionNavbar = forwardRef(({
    style,
    leftItems,
    rightItems,
    query,
    formatHref
}, ref) => {

    console.log('leftItems');
    console.log(leftItems);

    return (
        <nav
            ref={ref}
            className="gn-action-navbar"
            style={style}
        >
            <div className="gn-action-navbar-container">
                <ReactResizeDetector handleHeight>
                    {({ height }) => (
                        <div
                            className="gn-action-navbar-content"
                        >
                            <div
                                className="gn-action-navbar-content-left"
                            >
                                {leftItems &&
                                    <Menu
                                        items={leftItems}
                                        containerClass={`gn-brand-navbar-left-side`}
                                        childrenClass={`gn-user-dropdown`}
                                        formatHref={formatHref}
                                        query={query}
                                    />

                                }
                            </div>
                            <div
                                className="gn-action-navbar-content-right"
                            >
                                {rightItems &&
                                    <Menu
                                        items={rightItems}
                                        containerClass={`gn-brand-navbar-right-side`}
                                        childrenClass={`gn-user-dropdown`}
                                        formatHref={formatHref}
                                        query={query}
                                    />

                                }
                            </div>
                        </div>
                    )}
                </ReactResizeDetector>

            </div>

        </nav>

    );
});

ActionNavbar.propTypes = {
    style: PropTypes.object,
    leftItems: PropTypes.array,
    rightItems: PropTypes.array,
    query: PropTypes.object,
    formatHref: PropTypes.func
};

ActionNavbar.defaultProps = {
    leftItems: [],
    rightItems: [],
    query: {},
    formatHref: () => '#'
};


export default ActionNavbar;
