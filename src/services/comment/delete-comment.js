import { getData, saveData } from '../../utils/db/index.js';

export const deleteOwnComment = async (request, reply) => {
  const { params, username } = request;
  const { blogId, commentId } = params;

  const db = await getData();

  // The user must be logged in
  if (!username) {
    return reply.badRequest();
  }

  // Displays an unauthorized prompt if the user tries to delete comments that he/she does not own
  if (db.blogs[blogId].comments[commentId].username !== username) {
    return reply.forbidden('You are not the owner of the comment');
  }

  delete db.blogs[blogId].comments[commentId];

  await saveData(db);

  return {
    success: true
  };
};