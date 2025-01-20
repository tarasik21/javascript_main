
export const getSquaredArray = (numbers) => {
    return numbers.map(num => num * num);
};


export const getOddNumbers = (numbers) => {
    return numbers.filter(num => num % 2 !== 0);
};


export default (a, b) => {
    return a + b;
};