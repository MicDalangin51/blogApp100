import { html } from 'lit';

export function template () {
  return html`<header>
    <h1>
      My Blog Application
    </h1>
    <nav>
    ${this.loggedIn
      ? html`
        <a href="/blog">
          Blogs
        </a>
        <a href="/user">
            See User Data
        </a>
        <a href="change-user-data">
            Change Own User Data
        </a>
        <a href="/change-password">
            Change Own Password
        </a>
        <a href="/logout">
            Logout
        </a>
      `
      : html`
        <a href="/login">
          Login
        </a>
      `}
    </nav> 
  </header>`;
} 