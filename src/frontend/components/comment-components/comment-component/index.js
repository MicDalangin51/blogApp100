import { customElement, property } from 'lit/decorators.js';
import { LitNoShadow } from '../../../utils/lit-no-shadow/index.js';
import { template } from './template.js';

/**
 * @type {LitPage}
 */
@customElement('comment-component')
class Page extends LitNoShadow {
  @property({ type: Object })
  comment = null

  @property({ type: String })
  text = ''



  render () {
    return template.bind(this)();
  }

  async submitComment (event) {
    event.preventDefault();

    const { target: form } = event;

    const detail = {
      id : this.comment.id,
      content: form.content.value,

    };

    // we want to dispatch this event
    this.dispatchEvent(new window.CustomEvent('submit-comment', { detail }));
  }
}

export { Page };