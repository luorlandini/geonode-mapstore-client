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
import Tag from '@js/components/home/Tag';
import { Dropdown, Badge } from 'react-bootstrap-v1';
import Message from '@mapstore/framework/components/I18N/Message';
import {
    readProperty,
    filterMenuItems
} from '@js/utils/MenuUtils';
import { Nav } from 'react-bootstrap-v1';
import DropdownList from './DropdownList';
const isValidBadgeValue = value => !!(value !== '' && !isNil(value));
const MenuItem = ({ item, menuItemsProps, containerNode, tabIndex, draggable, classItem }) => {

    const { formatHref, query, state } = menuItemsProps;
    const { id, type, label, labelId = '', items = [], href, style, badge = '', image, subType } = item;
    const badgeValue = readProperty(state, badge);

    if (type === 'dropdown') {
        return (<DropdownList
            id={id}
            items={items}
            label={label}
            labelId={labelId}
            toogleStyle={style}
            toogleImage={image}
            state={state}
            dropdownClass={classItem}
            tabIndex={tabIndex}
            badgeValue={badgeValue}
            containerNode={containerNode}
        />)
    }

    if (type === 'link') {
         if (subType === 'tag')
            return (
                <Tag
                    tabIndex={tabIndex}
                    draggable={draggable}
                    href={readProperty(state, href)}
                    style={style}

                >
                    {labelId && <Message msgId={labelId} /> || label}
                    {isValidBadgeValue(badgeValue) && <Badge>{badgeValue}</Badge>}
                </Tag>
            )

        return (
            <Nav.Link href={readProperty(state, href)}>{labelId && <Message msgId={labelId} /> || label}</Nav.Link>
        );

    }

    if (type === 'divider') {
        return <div className="gn-menu-index-divider" style={style}></div>;
    }
    if (type === 'filter') {
        const active = castArray(query.f || []).find(value => value === item.id);
        return (
            <Tag
                tabIndex={tabIndex}
                draggable={draggable}
                active={active}
                style={style}
                href={formatHref({
                    query: { f: item.id },
                    replaceQuery: active ? false : true
                })}
            >
                {labelId && <Message msgId={labelId} /> || label}
                {isValidBadgeValue(badgeValue) && <Badge>{badgeValue}</Badge>}
            </Tag>
        );
    }
    return null;


}

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    menuItemsProps: PropTypes.object.isRequired,
    containerNode: PropTypes.element,
    tabIndex: PropTypes.number,
    draggable: PropTypes.bool,
    classItem: PropTypes.string,

}

export default MenuItem;