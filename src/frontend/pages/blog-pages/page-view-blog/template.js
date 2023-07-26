import { html } from 'lit';
import '../../../components/blog-components/blog-component/index.js';

export function template () {
  console.log("look")
  return html`
    <style>
      .todo {
        display: flex;
        align-items: center;
        padding: 12px;
      }
      .todo * {
        flex: 1;
      }
    </style>
    
    ${this.errorMessage
      // if this is an errorMessage
      ? html`
        <div class="flex-group">
          ${this.errorMessage}
        </div>
      `
      : ''}
      ${Object.keys(this.blog).length ? html`
      <h2>${this.blog.title}</h2>
      <h3>${this.blog.content}</h3>
      
      <div> <h5> Created on ${new Date(this.blog.createdDate).toDateString()}| </h5></div>
      <div> <h5>Last updated on ${new Date( this.blog.updatedDate).toDateString()}</h5></div>
      <button @click="${this.editBlog}"> Edit </button>
      <button @click= "${this.deleteBlog}"> Delete </button> 
      ${this.isEditing?  html`
         <blog-component @submit-blog="${this.editBlogPage} .blog="${this.blog}"></blog-component>
        `
          :''
      }

      
      
    
      ${ !this.isEditing ?   Object.keys(this.blog.comments).forEach(function(key, index) {
        return html`
        <h4>${this.blog.comments[key].content}</h4>
        <h5>${this.blog.comments[key].username}</h5>
        <h6>${this.blog.comments[key].createdDate}</h6>
        <h6>${this.blog.comments[key].updatedDate}</h6>
        `
      }): ''}
      <button> Comment </button> 
    
    `: ''}
   
    
  `;
}