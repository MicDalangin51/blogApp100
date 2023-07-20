import { customElement, property } from 'lit/decorators.js';
import { state } from '../../../worker/index.js';
import { changeUrl } from '../../../utils/helpers/change-url.js';
import { LitPage } from '../../../utils/lit-page/index.js';
import { template } from './template.js';

/**
 * @type {LitPage}
 */
@customElement('page-todo-one')
class Page extends LitPage {
  @property({ type: Object })
  blog = {}

  @property({ type: Boolean })
  isEditing= false;

  @property({ type: String })
  errorMessage = ''
  render () {
    return template.bind(this)();
  }
  async updated (changedMap) {
    await super.updated(changedMap);
    if (changedMap.has('paramObject')) {
      const { id } = this.paramObject || {};
      if (id) {
        await this.getBlog(id);
      }
    }
  }
  async editBlog(){
    this.isEditing= true;
  }
  async getBlog (id) {
    const response = await window.fetch(`/api/blog/${id}`);
    if (response.status !== 200) {
      return this.setErrorMessage(await response.json(), response.status);
    }
    try {
      if (response.status !== 200) {
        return this.setErrorMessage(await response.json(), response.status);
      } else {
        this.blog = await response.json();
        console.log(this.blog);
      }
    } catch (error) {
      return this.setErrorMessage(error, 404);
    }
  }
  // async updateTodo (event) {
  //   event.preventDefault();
  //   // we get the data from the detail being sent by the todo-component
  //   const { detail } = event;
  //   const response = await window.fetch(`/api/todo/${this.todo.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(detail)
  //   });
  //   try {
  //     if (response.status !== 200) {
  //       return this.setErrorMessage(await response.json(), response.status);
  //     } else {
  //       this.todo = await response.json();
  //       changeUrl('/todos');
  //     }
  //   } catch (error) {
  //     return this.setErrorMessage(error, 404);
  //   }
  // }
  async setErrorMessage (data, status) {
    const { message, error } = data;
    this.errorMessage = `HTTP Code: ${status} - ${error} - ${message}`;
    await state.set('user-is-logged-in', false);
  }
}

export { Page }; 