import data from './data.js';
import sortFlight from './utils/sortFlight.js';


const dom = {
    parent: document.getElementById('parent')
};

const createFlight = (flight) => {
    //Flight
    const flightDom = document.createElement('div');
    flightDom.className = 'flight';

    //Name
    const name = document.createElement('div');
    name.className = 'name';
    name.innerText = flight.name;

    //Plane
    const plane = document.createElement('div');
    plane.className = 'plane';
    plane.innerText = flight.plane;

    //Departure
    const departureDate = document.createElement('div');
    departureDate.className = 'departureDate';
    departureDate.innerText = flight.departureDate;

    //origin
    const origin = document.createElement('div');
    origin.className = 'origin';
    origin.innerText = flight.origin;

    //arrivalDate

    const arrivalDate = document.createElement('div');
    arrivalDate.className = 'arrivalDate';
    arrivalDate.innerText = flight.arrivalDate;

    //destination

    const destination = document.createElement('div');
    destination.className = 'destination';
    destination.innerText = flight.destination;

    //stops
    const stops = document.createElement('div');
    stops.className = 'stop';
    stops.innerText = flight.stops;

    flightDom.append(
        name,
        plane,
        departureDate,
        origin,
        arrivalDate,
        destination,
        stops
    );
    return flightDom;
};

// sortFlight
sortFlight(data);

//loadHandler
const loadHandler = () => {
    const organizeFlights = sortFlight(data);

    organizeFlights.forEach((flight) => {
        const flightDom = createFlight(flight);
        dom.parent.appendChild(flightDom);
    });
};

// loadEvent

const loadEvent = () => {
    window.addEventListener('load', loadHandler);
};

loadEvent();
