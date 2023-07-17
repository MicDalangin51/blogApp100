import { general } from './general/index.js';
import { registerUser } from './users/register-user.js';
import { loginUser } from './users/login-user.js';
import { logoutUser } from './users/logout-user.js';
import { changeOwnPassword } from './user-data/change-own-password.js';
import { seeUserData } from './user-data/see-user-data.js';
import { changeUserData } from './user-data/change-user-data.js';
import { createBlogPage } from './blog/create-blog.js';
import { editBlogPage } from './blog/edit-blog.js';
import { viewBlogPage } from './blog/view-blog.js';
import { deleteBlogData } from './blog/delete-blog.js';
import { listBlogPage } from './blog/list-blog-page.js';
import { addComment } from './comment/add-comment.js';
import { updateOwnComment } from './comment/update-comment.js';
import { deleteOwnComment } from './comment/delete-comment.js';

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
    editBlogPage = editBlogPage
    viewBlogPage = viewBlogPage
    deleteBlogData = deleteBlogData
    listBlogPage = listBlogPage
    addComment = addComment
    updateOwnComment = updateOwnComment
    deleteOwnComment = deleteOwnComment
    
}