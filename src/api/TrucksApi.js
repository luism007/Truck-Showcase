
export const getTrucks = async () => {
    const response = await fetch('http://localhost:3000/trucks');
    return response.json();
}