import { getData, saveData } from '../../utils/db/index.js';

export const deleteBlogData = async (request, reply) => {
  const { params, username } = request;
  const { blogId: id } = params;
  const db = await getData();

  // user must be logged in to delete blog data
  if (!username) {
    return reply.badRequest();
  }

  if (db.blogs[id].username !== username) {
    return reply.forbidden('You are not the owner of the blog');
  }

  delete db.blogs[id];

  await saveData(db);

  return {
    success: true
  };
};