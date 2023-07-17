import { getData, saveData } from '../../utils/db/index.js';
import { v4 } from 'uuid';

export const addComment = async (request, reply) => {
  console.log(request.params);
  const { params, body, username } = request;
  const { content } = body;
  const { blogId } = params;
  const db = await getData();

  const id = v4();

  // check if the user is logged in first
  if (!username) {
    return reply.badRequest();
  }

  db.blogs[blogId].comments.push(id);

  const comment = {
    content,
    username,
    createdDate: new Date().getTime(),
    updatedDate: new Date().getTime()
  };

  db.comments[id] = comment;

  await saveData(db);

  return {
    id,
    ...comment
  };
};