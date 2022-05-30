
export const getTrucks = async () => {
    const response = await fetch('http://localhost:3000/api/trucks');
    return response.json();
}

export const createTruck = async (truck) => {
    const response = await fetch('http://localhost:3000/api/trucks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(truck)
    });
    return response.json();
}