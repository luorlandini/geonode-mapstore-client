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
const MenuItem = ({item, menuItemsProps, containerNode, tabIndex, draggable, dropdownClass}) => {

    const { formatHref, query, state } = menuItemsProps;
    const { id, type, label, labelId = '', items = [], href, style, badge = '', image } = item;
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
            dropdownClass={dropdownClass}
            tabIndex={tabIndex}
            badgeValue={badgeValue}
            containerNode={containerNode}
        />)
    }
    /*
    if (type === 'link') {
        return (
            <Nav.Link href={readProperty(state, href)}>{labelId && <Message msgId={labelId}/> || label}</Nav.Link>
        );
    }
    */
    if (type === 'link') {
        return (
            <Tag
                tabIndex={tabIndex}
                draggable={draggable}
                href={readProperty(state, href)}
                style={style}

            >
                {labelId && <Message msgId={labelId}/> || label}
                {isValidBadgeValue(badgeValue) && <Badge>{badgeValue}</Badge>}
            </Tag>
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
                {labelId && <Message msgId={labelId}/> || label}
                {isValidBadgeValue(badgeValue) && <Badge>{badgeValue}</Badge>}
            </Tag>
        );
    }

    return null;


}

export default MenuItem;