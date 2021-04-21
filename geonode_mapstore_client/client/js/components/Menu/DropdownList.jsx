import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Message from '@mapstore/framework/components/I18N/Message';
import { Dropdown, Badge } from 'react-bootstrap-v1';
import isNil from 'lodash/isNil';
import {
    readProperty,
    filterMenuItems
} from '@js/utils/MenuUtils';
import { createPortal } from 'react-dom';

const isValidBadgeValue = value => !!(value !== '' && !isNil(value));


const DropdownList = ({
    id,
    items,
    label,
    labelId,
    toogleStyle,
    toogleImage,
    state,
    dropdownClass,
    tabIndex,
    badgeValue,
    containerNode,
}) => {


    const dropdownItems = items
        .filter((itm) => filterMenuItems(state, itm))
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
                    {itm.labelId && <Message msgId={itm.labelId} /> || itm.label}
                    {isValidBadgeValue(itmBadgeValue) && <Badge>{itmBadgeValue}</Badge>}
                </Dropdown.Item>
            );
        });

    const DropdownToogle = (
        <Dropdown.Toggle
                id={'gn-toggle-dropdown-' + id}
                variant="default"
                tabIndex={tabIndex}
                style={toogleStyle}
            >
                {toogleImage
                    ? <img src={readProperty(state, toogleImage)} />
                    : null
                }
                {labelId && <Message msgId={labelId} /> || label}
                {isValidBadgeValue(badgeValue) && <Badge>{badgeValue}</Badge>}
            </Dropdown.Toggle>

    );


    return (
        <Dropdown
            className={`${dropdownClass}`}
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

}

DropdownList.propTypes = {
    id: PropTypes.number,
    items: PropTypes.array.isRequired,
    label:PropTypes.string,
    labelId:PropTypes.string,
    toogleStyle: PropTypes.object,
    toogleImage: PropTypes.string,
    state: PropTypes.object,
    dropdownClass: PropTypes.string,
    tabIndex: PropTypes.number,
    badgeValue: PropTypes.number,
    containerNode: PropTypes.element

};

export default DropdownList;