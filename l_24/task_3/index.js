'use strict';

export const getDiffFormatted = (startDate, endDate) => {
    const { days, hours, minutes, seconds } = getDiff(startDate, endDate);
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};

console.log(getDiffFormatted(start, end)); 