export const getGreenwichTime = (date) => {

    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');


    return `${hours}:${minutes}`;
};


console.log(getGreenwichTime(new Date())); 