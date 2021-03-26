import React from 'react';
import PropTypes from 'prop-types';

const LinkList = ({ children, classes, ...props }) => {

    return (
        <ul>
            {children}
        </ul>
    );

};

LinkList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    props: PropTypes.object,
    classes: PropTypes.string
};

export default LinkList;
