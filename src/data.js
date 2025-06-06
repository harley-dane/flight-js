const data = {
    flights: [
        {
            id: 1,
            name: 'VQ-903',
            plane: 'ATR725',
            departureDate: '2023-08-05 13:45:00',
            origin: 'DAC',
            arrivalDate: '2023-08-05 14:40:00',
            destination: 'CGP',
            stops: 0
        },
        {
            id: 2,
            name: 'VQ-906',
            plane: 'A320',
            departureDate: '2023-08-20 09:00:00',
            origin: 'SFO',
            arrivalDate: '2023-08-20 12:15:00',
            destination: 'JFK',
            stops: 0
        },
        {
            id: 3,
            name: 'VQ-907',
            plane: 'BOEING737',
            departureDate: '2023-08-25 14:20:00',
            origin: 'LAX',
            arrivalDate: '2023-08-25 18:40:00',
            destination: 'ORD',
            stops: 1
        },
        {
            id: 4,
            name: 'VQ-904',
            plane: 'ATR725',
            departureDate: '2023-08-10 09:10:00',
            origin: 'CGP',
            arrivalDate: '2023-08-10 10:05:00',
            destination: 'DAC',
            stops: 0
        },
        {
            id: 5,
            name: 'VQ-905',
            plane: 'BOEING747',
            departureDate: '2023-08-15 16:30:00',
            origin: 'LHR',
            arrivalDate: '2023-08-16 02:45:00',
            destination: 'JFK',
            stops: 1
        },
        {
            id: 6,
            name: 'VQ-903',
            plane: 'ATR725',
            departureDate: '2023-08-05 13:45:00',
            origin: 'DAC',
            arrivalDate: '2023-08-05 14:40:00',
            destination: 'CGP',
            stops: 0
        },
        {
            id: 7,
            name: 'KK-000',
            plane: 'ATR000',
            departureDate: '2023-08-30 13:45:00',
            origin: 'DAC',
            arrivalDate: '2023-08-30 15:40:00',
            destination: 'CGP',
            stops: 2
        },
        {
            id: 8,
            name: 'KK-001',
            plane: 'ATR001',
            departureDate: '2023-08-30 13:45:00',
            origin: 'DAC',
            arrivalDate: '2023-08-30 15:40:00',
            destination: 'CGP',
            stops: 3
        },
        {
            id: 9,
            name: 'VQ-903',
            plane: 'ATR725',
            departureDate: '2023-08-18 13:42:00',
            origin: 'DAC',
            arrivalDate: '2023-08-18 14:40:00',
            destination: 'CGP',
            stops: 0
        },
        {
            id: 10,
            name: 'VQ-906',
            plane: 'A320',
            departureDate: '2023-08-12 09:05:00',
            origin: 'SFO',
            arrivalDate: '2023-08-12 12:15:00',
            destination: 'JFK',
            stops: 0
        },
        {
            id: 11,
            name: 'VQ-907',
            plane: 'BOEING737',
            departureDate: '2023-08-13 14:05:00',
            origin: 'LAX',
            arrivalDate: '2023-08-13 18:40:00',
            destination: 'ORD',
            stops: 1
        },
        {
            id: 12,
            name: 'VQ-904',
            plane: 'ATR725',
            departureDate: '2023-08-09 09:11:00',
            origin: 'CGP',
            arrivalDate: '2023-08-09 10:05:00',
            destination: 'DAC',
            stops: 0
        },
        {
            id: 13,
            name: 'VQ-907',
            plane: 'BOEING747',
            departureDate: '2023-08-14 16:00:00',
            origin: 'LHR',
            arrivalDate: '2023-08-15 02:45:00',
            destination: 'JFK',
            stops: 1
        },
        {
            id: 14,
            name: 'VQ-903',
            plane: 'ATR770',
            departureDate: '2023-08-04 10:40:00',
            origin: 'DAC',
            arrivalDate: '2023-08-05 14:30:00',
            destination: 'CGP',
            stops: 0
        },
        {
            id: 15,
            name: 'KK-000',
            plane: 'ATR560',
            departureDate: '2023-08-15 13:00:00',
            origin: 'DAC',
            arrivalDate: '2023-08-16 09:40:00',
            destination: 'CGP',
            stops: 2
        },
        {
            id: 16,
            name: 'KK-001',
            plane: 'ATR441',
            departureDate: '2023-08-30 12:45:00',
            origin: 'DAC',
            arrivalDate: '2023-08-31 15:50:00',
            destination: 'CGP',
            stops: 2
        },
        {
            id: 17,
            name: 'VQ-903',
            plane: 'ATR725',
            departureDate: '2023-08-07 18:25:00',
            origin: 'DAC',
            arrivalDate: '2023-08-07 20:40:00',
            destination: 'CGP',
            stops: 0
        },
        {
            id: 18,
            name: 'VQ-906',
            plane: 'A320',
            departureDate: '2023-08-16 09:00:00',
            origin: 'SFO',
            arrivalDate: '2023-08-16 12:15:00',
            destination: 'JFK',
            stops: 0
        },
        {
            id: 19,
            name: 'VQ-907',
            plane: 'BOEING737',
            departureDate: '2023-08-14 14:27:00',
            origin: 'LAX',
            arrivalDate: '2023-08-14 16:50:00',
            destination: 'ORD',
            stops: 1
        },
        {
            id: 20,
            name: 'VQ-904',
            plane: 'ATR725',
            departureDate: '2023-08-11 09:11:00',
            origin: 'CGP',
            arrivalDate: '2023-08-11 10:17:00',
            destination: 'DAC',
            stops: 0
        },
        {
            id: 21,
            name: 'VQ-905',
            plane: 'BOEING747',
            departureDate: '2023-08-17 16:28:00',
            origin: 'LHR',
            arrivalDate: '2023-08-17 02:46:00',
            destination: 'JFK',
            stops: 1
        },
        {
            id: 22,
            name: 'VQ-903',
            plane: 'ATR725',
            departureDate: '2023-08-09 13:09:00',
            origin: 'DAC',
            arrivalDate: '2023-08-09 14:35:00',
            destination: 'CGP',
            stops: 0
        },
        {
            id: 23,
            name: 'KK-000',
            plane: 'ATR000',
            departureDate: '2023-08-27 18:45:00',
            origin: 'DAC',
            arrivalDate: '2023-08-27 20:40:00',
            destination: 'CGP',
            stops: 2
        },
        {
            id: 24,
            name: 'KK-001',
            plane: 'ATR001',
            departureDate: '2023-08-02 13:45:00',
            origin: 'DAC',
            arrivalDate: '2023-08-02 20:40:00',
            destination: 'CGP',
            stops: 3
        }
    ]
};

export default data;
