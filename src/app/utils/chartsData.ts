export const randomizeValue = () => Math.floor(Math.random() * 100);
export const randomizeArrayValues = (length: number) => {
    return Array.from({ length }, () => randomizeValue());
}

export const ngxColumnPieData = () => {
    return [
        {
            "name": "Juan Pérez",
            "value": randomizeValue()
        },
        {
            "name": "Ana Gómez",
            "value": randomizeValue()
        },
        {
            "name": "Luis Martínez",
            "value": randomizeValue()
        },
        {
            "name": "Laura Fernández",
            "value": randomizeValue()
        },
        {
            "name": "Carlos Rodríguez",
            "value": randomizeValue()
        },
        {
            "name": "Marta López",
            "value": randomizeValue()
        },
        {
            "name": "Pedro Morales",
            "value": randomizeValue()
        },
        {
            "name": "Sofia Torres",
            "value": randomizeValue()
        },
        {
            "name": "Jorge Ruiz",
            "value": randomizeValue()
        },
        {
            "name": "Isabel Ramírez",
            "value": randomizeValue()
        }
    ];
}

export const chartjsColumnPieData = (label: string) => {
    return {
        labels: ['Juan Pérez', 'Ana Gómez', 'Luis Martínez', 'Laura Fernández', 'Carlos Rodríguez', 'Marta López', 'Pedro Morales', 'Sofía Torres', 'Jorge Ruiz', 'Isabel Ramírez'],
        datasets: [
            {
                label: 'PQRs Gestionadas',
                data: randomizeArrayValues(10)
            }
        ]
    }
};

export const chartjsLineData = (datesRange: string[]) => {
    return {
        labels: datesRange,
        datasets: [
            {
                label: 'Juan Pérez',
                data: randomizeArrayValues(datesRange.length),
                tension: 0.4,
                fill: true
            },
            {
                label: 'Ana Gómez',
                data: randomizeArrayValues(datesRange.length),
                tension: 0.4,
                fill: false
            },
            {
                label: 'Luis Martínez',
                data: randomizeArrayValues(datesRange.length),
                tension: 0.4,
                fill: true
            },
            {
                label: 'Laura Fernández',
                data: randomizeArrayValues(datesRange.length),
                tension: 0.4,
                fill: false
            }
        ]
    }
};

export const ngxLineData = (datesRange: string[]) => {
    console.log(datesRange);
    return [
        {
            "name": "Juan Pérez",
            "series": datesRange.map(date => ({
                "value": randomizeValue(),
                "name": date
            }))
        },
        {
            "name": "Ana Gómez",
            "series": datesRange.map(date => ({
                "value": randomizeValue(),
                "name": date
            }))
        },
        {
            "name": "Luis Martínez",
            "series": datesRange.map(date => ({
                "value": randomizeValue(),
                "name": date
            }))
        },
        {
            "name": "Laura Fernández",
            "series": datesRange.map(date => ({
                "value": randomizeValue(),
                "name": date
            }))
        },
        {
            "name": "Carlos Rodríguez",
            "series": datesRange.map(date => ({
                "value": randomizeValue(),
                "name": date
            }))
        }
    ];
}