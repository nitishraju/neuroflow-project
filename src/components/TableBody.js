import React from 'react';
import PropTypes from 'prop-types';


const TableBody = ({ tableData, keyNames, formatData = (obj, key) => obj[key] }) => {
    return (
        <tbody>
            {tableData.map((albumItem, index) => (
                <tr key={index}>
                    {keyNames.map((keyName, keyIndex) => (
                        <td key={keyIndex}>{formatData(albumItem, keyName)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    keyNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    formatData: PropTypes.func,
};

export default TableBody;
