import { general } from './general/index.js';
import { user } from './user/index.js';
import { userData } from './user-data/index.js';
import { blog } from './blog/index.js';
import { comment } from './comment/index.js';

export const paths = {
  ...general,
  ...user,
  ...userData,
  ...blog,
  ...comment
};