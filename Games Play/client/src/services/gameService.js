import { request} from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/catalog';


export const create = async ({ title, category, maxLevel, imageUrl, summary }) => {
    const response = await fetch(`${baseUrl}`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, maxLevel, category, imageUrl, summary })
    });

    const result = await response.json();
    return result;

}

export const getAll = async () => {
const result = await request ('GET', baseUrl);
return Object.values(result);
}