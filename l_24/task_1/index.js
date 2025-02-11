'use strict';

// put your code here
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed']


const getDayofWeek = (date, days) =>{
    const day = new Date(date).getDate();
    const dateInFuture new Date(date).setDate(day + days);

    return weekDays[new Date(dateInFuture).getDate()];
};
const result = getDayofWeek(new Date(2019, 0, 1) 14);
console.log(result);