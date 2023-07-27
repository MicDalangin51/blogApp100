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

  const selectedBlog = blogs[id];
  const comm = Object
    .entries(selectedBlog.comments)
    .map(function ([id, comment]) {
      return {
        id,
        ...comment
      };
    });


  selectedBlog.comments = comm;

  return {
    id,
    ...selectedBlog
  };
};