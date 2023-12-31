import { getData, saveData } from '../../utils/db/index.js';

export const editBlogPage = async (request, reply) => {
  const { params, body, username } = request;
  const { blogId: id } = params;
  const { title, content } = body;

  // Prompts an unauthorized error if the user is not logged in
  if (!username) {
    return reply.badRequest();
  }

  const db = await getData();

  if (db.blogs[id].username !== username) {
    return reply.forbidden('You are not the owner of the Blog');
  }

  db.blogs[id].title = title || db.blogs[id].title;
  db.blogs[id].content = content || db.blogs[id].content;
  db.blogs[id].updatedDate = new Date().getTime();

  await saveData(db);

  return {
    id,
    ...db.blogs[id]
  };
};