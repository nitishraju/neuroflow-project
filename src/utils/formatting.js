/**
 * Formats date object into the form MM/DD/YYYY.
 * Passing 'true' as second argument collects and formats time as HH:MM.
 */
const formatDateObject = (dateObj, withTime=false) => {

    const padZeros = (val) => {
        return val <= 9 ? '0' + val : val.toString();
    };

    const year = dateObj.getFullYear();
    const month = padZeros(dateObj.getMonth() + 1);
    const date = padZeros(dateObj.getDate());
    const dateString = month + '/' + date + '/' + year;

    let timeString = '';
    if (withTime) {
        const hrs = padZeros(dateObj.getHours() % 12 || 12);
        const mins = padZeros(dateObj.getMinutes());
        const period = dateObj.getHours() >= 12 ? 'pm' : 'am';
        timeString = ' ' + hrs + ':' + mins + period;
    }

    return dateString + timeString;
};


const utilFunctions = { formatDateObject };

export default utilFunctions;
