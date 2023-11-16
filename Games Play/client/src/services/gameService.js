import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/catalog';


export const create = async ({ title, category, maxLevel, imageUrl, summary }) => {
    const result = await request.post(baseUrl, { title, maxLevel, category, imageUrl, summary });


    return result;

};

export const getAll = async () => {

    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne =  async(gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);
    
    return result;
};