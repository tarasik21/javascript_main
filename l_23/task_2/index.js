const arenaElem = document.querySelector('.arena');
const selectedSeatElem = document.querySelector('.board__selected-seat');


function createSector() {
  const sector = document.createElement('div');
  sector.classList.add('sector');


  for (let lineNum = 1; lineNum <= 10; lineNum++) {
    const line = document.createElement('div');
    line.classList.add('sector__line');


    for (let seatNum = 1; seatNum <= 10; seatNum++) {
      const seat = document.createElement('div');
      seat.classList.add('sector__seat');
      seat.dataset.lineNumber = lineNum;
      seat.dataset.seatNumber = seatNum;
      line.append(seat);
    }

    sector.append(line);
  }

  return sector;
}


for (let sectorNum = 1; sectorNum <= 3; sectorNum++) {
  const sector = createSector();
  sector.dataset.sectorNumber = sectorNum;
  arenaElem.append(sector);
}


arenaElem.addEventListener('click', event => {
  if (!event.target.classList.contains('sector__seat')) {
    return;
  }

  const seatElem = event.target;
  const sectorNumber = seatElem.closest('.sector').dataset.sectorNumber;
  const lineNumber = seatElem.dataset.lineNumber;
  const seatNumber = seatElem.dataset.seatNumber;

  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
});