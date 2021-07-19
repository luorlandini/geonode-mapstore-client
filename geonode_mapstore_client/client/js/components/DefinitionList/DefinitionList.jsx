import React from 'react';


const DefinitionList = ({itemslist}) => {

    const items = itemslist?.map( item => {
        return (
            <>
                <dt className="DList-cell DList-cell--medium"><strong>{`${item.label}:`}</strong></dt>
                <dd className="DList-cell">{`${item.value}`}</dd>
            </>
        );
    });

    return (

        <dl className="DList DList--2cols DList--collapse">
            {items}
        </dl>

    );
};

export default DefinitionList;
