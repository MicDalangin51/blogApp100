import { customElement, property } from 'lit/decorators.js';
import { state } from '../../../worker/index.js';
import { LitPage } from '../../../utils/lit-page/index.js';
import { template } from './template.js';

/**
 * @type {LitPage}
 */
@customElement('page-blogs')
class Page extends LitPage {
  @property({ type: Array })
  blogs = []

  @property({ type: String })
  errorMessage = ''
  render () {
    return template.bind(this)();
  }
  async connectedCallback () {
    super.connectedCallback();
    const response = await window.fetch('/api/blog');
    if (response.status !== 200) {
      return this.setErrorMessage(await response.json(), response.status);
    }
    try {
      this.blogs = await response.json();
    } catch (error) {
      return this.setErrorMessage(error, 404);
    }
  }

  async createBlog (event) {
    event.preventDefault();
    // we get the data from the detail being sent by the todo-component
    const { detail } = event;
    const response = await window.fetch('/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detail)
    });
    try {
      const data = await response.json();
      // appends the new object
      this.blogs = [
        data,
        ...this.blogs
      ];
    } catch (error) {
      return this.setErrorMessage(error, 404);
    }
  }

  async setErrorMessage (data, status) {
    const { message, error } = data;
    this.errorMessage = `HTTP Code: ${status} - ${error} - ${message}`;
    await state.set('user-is-logged-in', false);
    setTimeout(() => {
      this.errorMessage = '';
    }, 2000);
  }
}

export { Page }; 