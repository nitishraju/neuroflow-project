import React from 'react';
import PropTypes from 'prop-types';


const TableBody = ({ tableData, keyNames, formatData = (item) => item }) => {
    return (
        <tbody>
            {tableData.map((albumItem, index) => (
                <tr key={index}>
                    {keyNames.map((keyName, keyIndex) => (
                        <tr key={keyIndex}>{formatData(albumItem[keyName])}</tr>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object),
    keyNames: PropTypes.arrayOf(PropTypes.string),
    formatData: PropTypes.func,
};

export default TableBody;