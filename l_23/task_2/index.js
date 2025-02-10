const generateNumbersRange = (from, to) =>{
const result = [];
for(let i = from; i <= to; i++){
    result.push(i);
}
return result;

}
const getLineSeats = () =>{
    return generateNumbersRange(1, 10)
    .map(seatNumber=>'
        <div 
        class="sector__seat" 
        data-seat-number="${seatNumber}"
        ></div>
        ').join('');
}
const getSectorLines = () =>{
    const seatsString = getLineSeats();
    return generateNumbersRange(1, 10)
    .map(lineNumber=>'
        <div 
        class="sector__line" 
        data-line-number="${lineNumber}"
        >${seatsString}</div>
        ').join('');
}
const renderArena = () => {
    const arenaElem = document.querySelector('.arena');
    const linesString = getSectorLines();

    const sectorsString = generateNumbersRange(1, 3)
    .map(sectorNumber=>'
                <div 
                class="sector" 
                data-sector-number="${SectorNumber}"
                >${linesString()}</div>
                ').join('');

                arenaElem.innerHTML = sectorsString;

}
renderArena();