'use strict';

'use strict';

export const getDiff = (startDate, endDate) => {

    let diff = Math.abs(endDate - startDate) / 1000; 


    const days = Math.floor(diff / 86400);
    diff %= 86400; 

    const hours = Math.floor(diff / 3600);
    diff %= 3600; 

    const minutes = Math.floor(diff / 60);
    const seconds = Math.floor(diff % 60);


    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};


const startDate = new Date(2023, 0, 1, 12, 0, 0); 
const endDate = new Date(2023, 9, 3, 14, 58, 16); 

console.log(getDiff(startDate, endDate)); 

