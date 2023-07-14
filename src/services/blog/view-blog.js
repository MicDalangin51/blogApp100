import { getData } from '../../utils/db/index.js';

export const viewBlogPage = async (request, reply) => {
  const { params, username } = request;
  const { blogId: id } = params;

  // An unauthorized error will be thrown if the user is not logged in
  if (!username) {
    return reply.badRequest();
  }

  const db = await getData();

  const { blogs } = db;

  if (!blogs[id]) {
    return reply.notFound();
  }

  if (blogs[id].username !== username) {
    return reply.forbidden('Sorry you are not the owner of this blog');
  }

  return {
    id,
    ...blogs[id]
  };
};