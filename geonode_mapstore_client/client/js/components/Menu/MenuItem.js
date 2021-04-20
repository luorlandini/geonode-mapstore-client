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

const isValidBadgeValue = value => !!(value !== '' && !isNil(value));

const MenuItem = ({item, menuItemsProps, containerNode, tabIndex, draggable, dropdownClass}) => {

    const { formatHref, query, state } = menuItemsProps;
    const { type, label, labelId = '', items = [], href, style, badge = '', image } = item;
    const badgeValue = readProperty(state, badge);
    if (type === 'dropdown') {
        const dropdownItems = items
            .filter((itm) => filterMenuItems(state, itm, item))
            .map((itm, idx) => {
                if (itm.type === 'divider') {
                    return <Dropdown.Divider key={idx} />;
                }
                const itmBadgeValue = readProperty(state, itm.badge || '');
                return (
                    <Dropdown.Item
                        key={idx}
                        href={readProperty(state, itm.href)}
                        style={itm.style}
                    >
                        {itm.labelId && <Message msgId={itm.labelId}/> || itm.label}
                        {isValidBadgeValue(itmBadgeValue) && <Badge>{itmBadgeValue}</Badge>}
                    </Dropdown.Item>
                );
            });
        return (
            <Dropdown
                className={`${dropdownClass}`}
            >
                <Dropdown.Toggle
                    id={'gn-menu-index-' + item.id}
                    variant="default"
                    tabIndex={tabIndex}
                    style={style}
                >
                    {image
                        ? <img src={readProperty(state, image)} />
                        : null
                    }
                    {labelId && <Message msgId={labelId}/> || label}
                    {isValidBadgeValue(badgeValue) && <Badge>{badgeValue}</Badge>}
                </Dropdown.Toggle>
                {containerNode
                    ? createPortal(<Dropdown.Menu>
                        {dropdownItems}
                    </Dropdown.Menu>, containerNode.parentNode)
                    : <Dropdown.Menu>
                        {dropdownItems}
                    </Dropdown.Menu>}
            </Dropdown>
        );
    }
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