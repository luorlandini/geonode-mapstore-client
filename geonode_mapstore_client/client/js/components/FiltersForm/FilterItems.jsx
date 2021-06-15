/* eslint-disable no-return-assign */
/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import castArray from 'lodash/castArray';
import { FormGroup, Checkbox } from 'react-bootstrap';
import ReactSelect from 'react-select';
import CheckboxTree from 'react-checkbox-tree';
import Message from '@mapstore/framework/components/I18N/Message';
import localizedProps from '@mapstore/framework/components/misc/enhancers/localizedProps';
import { getFilterLabelById } from '@js/utils/GNSearchUtils';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

const SelectSync = localizedProps('placeholder')(ReactSelect);
const SelectAsync = localizedProps('placeholder')(ReactSelect.Async);

function FilterItems({
    id,
    items,
    suggestionsRequestTypes,
    values,
    setValues
}) {

    const [openChildFilters, setOpenChildFilters] = useState(false);

    return (
        <>
            {items.map((field) => {
                if (field.type === 'select') {
                    const {
                        id: formId,
                        labelId,
                        label,
                        placeholderId,
                        description,
                        options,
                        suggestionsRequestKey
                    } = field;
                    const key = `${id}-${formId || suggestionsRequestKey}`;
                    const filterKey = suggestionsRequestKey
                        ? suggestionsRequestTypes[suggestionsRequestKey]?.filterKey
                        : `filter{${formId}.in}`;

                    const currentValues = suggestionsRequestKey
                        ? values[suggestionsRequestTypes[suggestionsRequestKey]?.filterKey] || []
                        : values[filterKey] || [];

                    const optionsProp = suggestionsRequestKey
                        ? { loadOptions: suggestionsRequestTypes[suggestionsRequestKey]?.loadOptions }
                        : { options: options.map(option => ({ value: option, label: option })) };
                    const Select = suggestionsRequestKey ? SelectAsync : SelectSync;
                    return (
                        <FormGroup
                            key={key}
                            controlId={key}
                        >
                            <label><strong>{labelId ? <Message msgId={labelId}/> : label}</strong></label>
                            <Select
                                value={currentValues.map((value) => ({ value, label: getFilterLabelById(filterKey, value) || value }))}
                                multi
                                placeholder={placeholderId}
                                onChange={(selected) => {
                                    setValues({
                                        ...values,
                                        [filterKey]: selected.map(({ value }) => value)
                                    });
                                }}
                                { ...optionsProp }
                            />
                            {description &&
                            <div className="text-muted">
                                {description}
                            </div>}
                        </FormGroup>
                    );
                }
                if (field.type === 'group') {
                    return (<>
                        <div className="gn-filter-form-group-title">
                            <strong><Message msgId={field.labelId}/> </strong>
                        </div>
                        <FilterItems
                            id={id}
                            items={field.items}
                            suggestionsRequestTypes={suggestionsRequestTypes}
                            values={values}
                            setValues={setValues}
                        />
                    </>);
                }
                if (field.type === 'divider') {
                    return <div className="gn-filter-form-divider"></div>;
                }
                if (field.type === 'link') {
                    return <div className="gn-filter-form-link"><a href={field.href}>{field.labelId && <Message msgId={field.labelId} /> || field.label}</a></div>;
                }
                if (field.type === 'filter') {
                    const customFilters = castArray(values.f || []);
                    const active = customFilters.find(value => value === field.id);
                    const handleParentFilter = (event) => {
                        field?.items && setOpenChildFilters(!openChildFilters);
                        field?.items && field.items.forEach( item => { item.isChecked = event.target.checked; });
                    };

                    const [childFilters, setChildFilters] = useState(field.items || []);

                    const handleChildFilter = (event) => {
                        childFilters.forEach(item => {
                            if (item.id === event.target.value) {
                                item.isChecked =  event.target.checked;
                            }
                        });
                        setChildFilters(childFilters);

                        const itemChoosed = childFilters.filter(value => {
                            return value.isChecked !== event.target.checked;
                        });
                        const labelItem = itemChoosed.map(item => {
                            return item.id;
                        });

                        setValues({
                            ...values,
                            storeType: labelItem
                        });

                    };


                    const filterChild = () => {
                        const customStoreType = castArray(values.storeType || []);
                        return childFilters.map((item) => {
                            const activeChild = customStoreType.find(value => value === item.id);
                            return (<Checkbox
                                type="checkbox"
                                checked={!!activeChild || item.isChecked}
                                value={item.id}
                                onChange={handleChildFilter}
                            >
                                <Message msgId={item.labelId}/>
                            </Checkbox>);
                        } );
                    };

                    useEffect(() => {
                        filterChild();
                    }, []);

                    return (
                        <FormGroup controlId={'gn-radio-filter-' + field.id}>
                            <Checkbox
                                type="checkbox"
                                checked={!!active}
                                value={field.id}
                                onClick={handleParentFilter}
                                onChange={() => {
                                    console.log('onChange');
                                    setValues({
                                        ...values,
                                        f: active
                                            ? customFilters.filter(value => value !== field.id)
                                            : [...customFilters, field.id]
                                    });
                                }}>
                                <Message msgId={field.labelId}/>
                                {(openChildFilters || !!active)  && filterChild()}
                            </Checkbox>

                        </FormGroup>

                    );
                }

                return null;
            })}
        </>
    );
}

FilterItems.defaultProps = {
    id: PropTypes.string,
    items: PropTypes.array,
    suggestionsRequestTypes: PropTypes.object,
    values: PropTypes.object,
    setValues: PropTypes.func
};

FilterItems.defaultProps = {
    items: [],
    suggestionsRequestTypes: {},
    values: {},
    setValues: () => {}
};

export default FilterItems;
