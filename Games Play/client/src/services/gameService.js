const baseUrl = 'http://localhost:3030/jsonstore';


export const create = async ({ title, category, maxLevel, imageUrl, summary }) => {
    const response = await fetch(`${baseUrl}/catalog`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, maxLevel, category, imageUrl, summary })
    });

    const result = await response.json();
    return result;

}