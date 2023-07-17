import { getData, saveData } from '../../utils/db/index.js';

export const updateOwnComment = async (request, reply) => {
  const { params, body, username } = request;
  const { blogId: blogid, commentId } = params;
  const { id, content } = body;

  // check if the user is logged in first
  if (!username) {
    return reply.badRequest();
  }

  const db = await getData();

  if (db.blogs[blogid].comments[commentId].username !== username) {
    return reply.forbidden('You are not the author of this comment');
  }

  db.blogs[blogid].comments[commentId].content = content || db.blogs[blogid].comments[commentId].content;
  db.blogs[blogid].comments[commentId].updatedDate = new Date().getTime();

  await saveData(db);

  return {
    id,
    ...db.blogs[blogid].comments[commentId]
  };
};