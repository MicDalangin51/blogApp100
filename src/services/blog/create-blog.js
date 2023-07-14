import { getData, saveData } from '../../utils/db/index.js';
import { v4 } from 'uuid';

export const createBlogPage = async (request, reply) => {
  const { body, username } = request;
  const { title, description } = body;
  const db = await getData();

  const id = v4();

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest();
  }

  const blog = {
    title,
    description,
    username,
    comments: [],
    createdDate: new Date().getTime(),
    updatedDate: new Date().getTime()
  };

  db.blogs[id] = blog;

  await saveData(db);

  return {
    id,
    ...blog
  };
};