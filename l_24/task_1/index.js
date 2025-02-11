'use strict';


const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getDayofWeek = (date, days) => {

    const dateInFuture = new Date(date);
    

    dateInFuture.setDate(dateInFuture.getDate() + days);


    return weekDays[dateInFuture.getDay()];
};


const result = getDayofWeek(new Date(2019, 0, 1), 14);
console.log(result);
