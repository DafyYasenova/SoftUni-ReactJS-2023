import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const createComment = async (gameId, username, text) => {
    const newComment = await request.post(baseUrl, {
        gameId,
        username,
        text,

    });
    return newComment;
}
export const getAllComments = async (gameId) =>{
   const result =  await request.get(baseUrl);
   
   return Object.values(result).filter(comment => comment.gameId === gameId)
}
