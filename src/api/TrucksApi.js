
export const getTrucks = async () => {
    const response = await fetch('http://localhost:3000/api/trucks');
    return response.json();
}