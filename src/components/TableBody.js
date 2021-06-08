import React from 'react';
import PropTypes from 'prop-types';


const TableBody = ({ tableData, keyNames, formatData = (item) => item }) => {
    return (
        <tbody>
            {tableData.map((albumItem, index) => (
                <tr key={index}>
                    {keyNames.map((keyName, keyIndex) => (
                        <td key={keyIndex}>{formatData(albumItem[keyName])}</td>
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