/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Menu from '@js/components/Menu';
import BurgerMenu from '@js/components/Menu/BurgerMenu';
import useResizeElement from '@js/hooks/useResizeElement';


const LeftContentMenu = ({ items, formatHref, query }) => {

    const navbarContentLeft = useRef();
    const navbarLeft = useRef();
    const { width: widthContentLeft } = useResizeElement(navbarContentLeft);
    const { width: widthNavbarLeft } = useResizeElement(navbarLeft);
    const [switchToBurgerMenu, setSwitchToBurgerMenu] = useState(false)
    useEffect(() => {
        setSwitchToBurgerMenu(widthNavbarLeft >= widthContentLeft)
    }, [widthNavbarLeft, widthContentLeft])

    return (
        <div
            className="gn-action-navbar-content-left"
            ref={navbarContentLeft}
        >
            {
                (switchToBurgerMenu) && items && <BurgerMenu items={items} />
            }

            { (!switchToBurgerMenu) && items &&

                <Menu
                    ref={navbarLeft}
                    items={items}
                    containerClass={`gn-brand-navbar-left-side`}
                    childrenClass={`gn-user-dropdown`}
                    formatHref={formatHref}
                    query={query}
                />

            }
        </div>

    )
}


const RightContentMenu = ({ items, formatHref, query, parentRef }) => {

    const navbarContentRight = useRef();
    const navbarRight = useRef();
    const { width: widthNavbarRight } = useResizeElement(navbarRight);
    const { width: widthParent } = useResizeElement(parentRef);
    const [switchToBurgerMenu, setSwitchToBurgerMenu] = useState(false)
    useEffect(() => {
        setSwitchToBurgerMenu(widthNavbarRight >= widthParent)
    }, [widthNavbarRight, widthParent])

    return (
        <div
            ref={navbarContentRight}
            className="gn-action-navbar-content-right"
        >

            {
                (switchToBurgerMenu) && items && <BurgerMenu drop={'down'} items={items} />
            }

            {(!switchToBurgerMenu) && items &&
                <Menu
                    ref={navbarRight}
                    items={items}
                    containerClass={`gn-brand-navbar-right-side`}
                    childrenClass={`gn-user-dropdown`}
                    formatHref={formatHref}
                    query={query}

                />

            }

        </div>


    )
}


const ActionNavbar = forwardRef(({
    style,
    leftItems,
    rightItems,
    query,
    formatHref,
    tools,
}, ref) => {

    return (
        <nav
            ref={ref}
            className="gn-action-navbar"
            style={style}
        >
            <div className="gn-action-navbar-container">

                <div
                    className="gn-action-navbar-content"
                >
                    <LeftContentMenu
                        items={leftItems}
                        formatHref={formatHref}
                        query={query}
                    />

                    <RightContentMenu
                        items={rightItems}
                        formatHref={formatHref}
                        query={query}
                        parentRef={ref}
                    />

                    <div className="gn-action-navbar-content-tools">
                        {tools}
                    </div>
                </div>


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
