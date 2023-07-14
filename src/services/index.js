import { general } from './general/index.js';
import { registerUser } from './users/register-user.js';
import { loginUser } from './users/login-user.js';
import { logoutUser } from './users/logout-user.js';
import { changeOwnPassword } from './user-data/change-own-password.js';
import { seeUserData } from './user-data/see-user-data.js';
import { changeUserData } from './user-data/change-user-data.js';
import { createBlogPage } from './blog/create-blog.js';

export class Service {
  constructor (app) {
    this.app = app;
  }

    general = general
    registerUser = registerUser
    loginUser = loginUser
    logoutUser = logoutUser
    changeOwnPassword = changeOwnPassword
    seeUserData = seeUserData
    changeUserData = changeUserData
    createBlogPage = createBlogPage
}