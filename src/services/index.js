import { general } from './general/index.js';
import { registerUser } from './users/register-user.js';
import { loginUser } from './users/login-user.js';
import { logoutUser } from './users/logout-user.js';
import { changeOwnPassword } from './user-data/change-own-password.js';

export class Service {
  constructor (app) {
    this.app = app;
  }

    general = general
    registerUser = registerUser
    loginUser = loginUser
    logoutUser = logoutUser
    changeOwnPassword = changeOwnPassword
}