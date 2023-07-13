import { general } from './general/index.js';
import { registerUser } from './users/register-user.js';
import { loginUser } from './users/login-user.js';
import { logoutUser } from './users/logout-user.js';

export class Service {
  constructor (app) {
    this.app = app;
  }

    general = general
    registerUser = registerUser
    loginUser = loginUser
}