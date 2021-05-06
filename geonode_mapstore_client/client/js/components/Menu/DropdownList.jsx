/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */


import React from 'react';
import PropTypes from 'prop-types';
import Message from '@mapstore/framework/components/I18N/Message';
import { Dropdown, Badge } from 'react-bootstrap-v1';
import isNil from 'lodash/isNil';
import { createPortal } from 'react-dom';
import { Nav } from 'react-bootstrap-v1';
import FaIcon from '@js/components/home/FaIcon';
const isValidBadgeValue = value => !!(value !== '' && !isNil(value));
const itemsList = (items) => (
    items && items.map(({ labelId, href }) => itemElement(labelId, href)))
const itemElement = (labelId, className, href, index) => (<Nav.Link href={href}>{labelId && <Message msgId={labelId} /> || label}</Nav.Link>)

/**
 * DropdownList component
 * @name DropdownList
 * @memberof components.Menu.DropdownList
 * @prop {number} id to apply to toogle
 * @prop {array} items list od items of Dropdown
 * @prop {string} label label to apply to toogle
 * @prop {string} labelId alternative to label
 * @prop {string} labelId alternative to labe
 * @prop {object} toogleStyle inline style to apply to toogle comp
 * @prop {string} toogleImage image to apply to toogle comp
 * @prop {string} dropdownClass the css class to apply to the comp
 * @prop {number} tabIndex define navigation order
 * @prop {number} badgeValue to apply the value to the item in list
 * @prop {node} containerNode the node to append the child element into a DOM
 * @example
 *  <DropdownList
 *           id={id}
 *           items={items}
 *           label={label}
 *           labelId={labelId}
 *           toogleStyle={style}
 *           toogleImage={image}
 *           state={state}
 *           dropdownClass={classItem}
 *           tabIndex={tabIndex}
 *           badgeValue={badgeValue}
 *           containerNode={containerNode}
 *       />
 *
 */


const DropdownList = ({
    id,
    items,
    label,
    labelId,
    toogleStyle,
    toogleImage,
    toogleIcon,
    dropdownClass,
    tabIndex,
    badgeValue,
    containerNode,
    size,
    alignRight,
    drop
}) => {
    console.log('drop');
    console.log(drop);

    const dropdownItems = items
        .map((itm, idx) => {
            if (itm.type === 'divider') {
                return <Dropdown.Divider key={idx} />;
            }
            return (
                <Dropdown.Item
                    key={idx}
                    href={itm.href}
                    style={itm.style}
                >
                    {itm.labelId && <Message msgId={itm.labelId} /> || itm.label}
                    {isValidBadgeValue(itm.badge) && <Badge>{itm.badge}</Badge>}
                    {itm?.items && <div className="gn-sub-flat-menu-block">
                            {itemsList(itm?.items)}
                        </div>}

                </Dropdown.Item>
            );
        });

    const DropdownToogle = (
        <Dropdown.Toggle
            id={'gn-toggle-dropdown-' + id}
            variant="default"
            tabIndex={tabIndex}
            style={toogleStyle}
            size={size}
        >
            {toogleImage
                ? <img src={toogleImage} />
                : null
            }
            {
                toogleIcon ? <FaIcon name={toogleIcon} />
                : null
            }

            {labelId && <Message msgId={labelId} /> || label}
            {isValidBadgeValue(badgeValue) && <Badge>{badgeValue}</Badge>}
        </Dropdown.Toggle>

    );


    return (
        <Dropdown
            className={`${dropdownClass}`}
            alignRight={alignRight}
            drop={drop}
        >
            {DropdownToogle}
            {containerNode
                ? createPortal(<Dropdown.Menu>
                    {dropdownItems}
                </Dropdown.Menu>, containerNode.parentNode)
                : <Dropdown.Menu>
                    {dropdownItems}
                </Dropdown.Menu>}
        </Dropdown>
    );

};

DropdownList.propTypes = {
    id: PropTypes.number,
    items: PropTypes.array.isRequired,
    label: PropTypes.string,
    labelId: PropTypes.string,
    toogleStyle: PropTypes.object,
    toogleImage: PropTypes.string,
    state: PropTypes.object,
    dropdownClass: PropTypes.string,
    tabIndex: PropTypes.number,
    badgeValue: PropTypes.number,
    containerNode: PropTypes.element

};

export default DropdownList;
