import React from 'react';
import PropTypes from 'prop-types';


const TableHeader = ({ headings }) => {
    return (
        <thead>
            <tr>
                {headings.map((heading, index) => (
                    <th key={index}>{heading}</th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    headings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHeader;
