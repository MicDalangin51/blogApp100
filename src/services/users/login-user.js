import { getData } from '../../utils/db/index.js';
import { compare } from 'bcrypt';

export const loginUser = async (request, reply) => {
  const { body } = request;
  const { username, password } = body;

  const db = await getData();

  if (!db.users[username]) {
    return reply.unauthorized('Incorrect username was provided');
  }

  if (!await compare(password, db.users[username].hashedPassword)) {
    return reply.unauthorized('Incorrect password');
  }

  const token = await reply.jwtSign({
    username
  });

  request.session.set('token', token);

  return {
    success: true
  };
};