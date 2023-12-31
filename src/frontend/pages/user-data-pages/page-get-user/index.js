import { customElement, property } from 'lit/decorators.js';
import { state } from '../../../worker/index.js';
import { changeUrl } from '../../../utils/helpers/change-url.js';
import { LitPage } from '../../../utils/lit-page/index.js';
import { template } from './template.js';

/**
 * @type {LitPage}
 */
@customElement('page-users')
class Page extends LitPage {

  @property({type: Object}) 
  userData = {};

  @property({ type: String })
  errorMessage = ''

  render () {
    return template.bind(this)();
  }

  async seeUserData(event){
    event.preventDefault();
    // gets the event.target and change the variable name to form
    const { target: form } = event;

    // console.log(Object.keys(this.userData).length);
    const userId = form.username.value;

    const response = await window.fetch(`/api/user/${userId}`);

    //console.log(await response.json());


    if (response.status === 200) {
        this.errorMessage = '';
        this.userData = await response.json();

    }else {
    const { message, error } = await response.json();
    this.errorMessage = `HTTP Code: ${response.status} - ${error} - ${message}`;
    setTimeout(() => {
      this.errorMessage = '';
    }, 2000);
    await state.set('user-is-logged-in', false);
    }

  }


}

export { Page }; 