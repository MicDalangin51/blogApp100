import { getData } from '../../utils/db/index.js';

export const listBlogPage = async (request, reply) => {
  const { query, username } = request;
  const { limit = 5 } = query;

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest();
  }

  const db = await getData();

  const list = [];

  const blogs = Object
    .entries(db.blogs)
    .map(function ([id, blogs]) {
      return {
        id,
        ...blogs
      };
    })
    .sort(function (blog1, blog2) {
      return blog2.createdDate - blog1.createdDate;
    });

  for (const blog of blogs) {
    const blog1 = blog;
    const comm = Object
      .entries(blog1.comments)
      .map(function ([id, comment]) {
        return {
          id,
          ...comment
        };
      });

    blog1.comments = comm;

    list.push(blog1);
    if (list.length >= limit) {
      break;
    }
  }

  return list;
};