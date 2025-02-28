'use strict';


const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];


export const dayOfWeek = (date, days) => {

    const dateInFuture = new Date(date);
    

    dateInFuture.setDate(dateInFuture.getDate() + days);

    return weekDays[dateInFuture.getDay()];
};


const result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result); 
