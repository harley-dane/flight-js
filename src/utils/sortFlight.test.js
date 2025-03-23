import sortFlight from "./sortFlight.js";
import data from "../data.js";

describe('sortFlight', () => {
    it('should sort flights by departure date in ascending order', () => {
        const Data = {
            flights: [
                {
                    id: 3,
                    name: 'VQ-907',
                    plane: 'BOEING737',
                    departureDate: '2023-08-25 14:20:00',
                    origin: 'LAX',
                    arrivalDate: '2023-08-25 18:40:00',
                    destination: 'ORD',
                    stops: 1,
                },
                {
                    id: 1,
                    name: 'VQ-903',
                    plane: 'ATR725',
                    departureDate: '2023-08-05 13:45:00',
                    origin: 'DAC',
                    arrivalDate: '2023-08-05 14:40:00',
                    destination: 'CGP',
                    stops: 0,
                },
                {
                    id: 2,
                    name: 'VQ-906',
                    plane: 'A320',
                    departureDate: '2023-08-20 09:00:00',
                    origin: 'SFO',
                    arrivalDate: '2023-08-20 12:15:00',
                    destination: 'JFK',
                    stops: 0,
                },
            ],
        };

        const sortedFlights = sortFlight(Data);
        expect(sortedFlights[0].id).toBe(1);
        expect(sortedFlights[1].id).toBe(2);
        expect(sortedFlights[2].id).toBe(3);
    });

    it('should sort the actual data flights by departure date in ascending order', () => {
        const sortedFlights = sortFlight(data);
        for (let i = 0; i < sortedFlights.length - 1; i++) {
            const currentFlightDate = new Date(sortedFlights[i].departureDate).getTime();
            const nextFlightDate = new Date(sortedFlights[i + 1].departureDate).getTime();
            expect(currentFlightDate).toBeLessThanOrEqual(nextFlightDate);
        }
    });
});