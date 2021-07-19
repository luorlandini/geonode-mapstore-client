import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Message from '@mapstore/framework/components/I18N/Message';
const DefinitionList = ({itemslist, extraItemsList}) => {

    const [extraItems, setExtraItems] = useState();
    const handleMoreInfo = () => {
        setExtraItems(!extraItems);
    };

    const items = itemslist?.map( item => {
        return (
            item.value && <>
                <dt className="DList-cell DList-cell--medium"><strong>{`${item.label}:`}</strong></dt>
                <dd className="DList-cell">{`${item.value}`}</dd>
            </>

        );
    });
    const moreInfoitems = extraItemsList?.map( item => {
        return (
            item.value && <>
                <dt className="DList-cell DList-cell--medium"><strong>{`${item.label}:`}</strong></dt>
                <dd className="DList-cell">{`${item.value}`}</dd>
            </>

        );
    });


    return (
        <div className="DList-containner">
            <dl className="DList DList--2cols">
                {items}
            </dl>

            {moreInfoitems && <a className={"moreinfo"} href="javascript:void(0);"  onClick={handleMoreInfo}><Message msgId={"gnviewer.moreinfo"} /></a>}

            {extraItems && <dl className="DList DList--2cols">
                {moreInfoitems}
            </dl>}
        </div>


    );
};

DefinitionList.propTypes = {
    itemslist: PropTypes.array
};

DefinitionList.defaultProps = {
    itemslist: []
};


export default DefinitionList;
