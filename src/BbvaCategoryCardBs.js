import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './BbvaCategoryCardBs-styles.js';
import { colors } from '@bbva-web-components/bbva-foundations-styles';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<bbva-category-card-bs></bbva-category-card-bs>
```

##styling-doc

@customElement bbva-category-card-bs
*/
export class BbvaCategoryCardBs extends LitElement {
  static get is() {
    return 'bbva-category-card-bs';
  }
  getData(data) {
    this.category = data;
  }
  getColor(colors){
    const randomcolor = Math.floor(Math.random() * colors.length);
    return colors[randomcolor];
  }
  // Declare properties
  static get properties() {
    return {
      category: { type: Object },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.colors = ["light", "secondary", "dark", "primary", "warning", "danger"];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('bbva-category-card-bs-shared-styles'),
    ];
  }

  // Define a template
  render() {
    return html`
    <div class="card text-white bg-${this.getColor(this.colors)} mb-3" style="max-width: 12rem;">
      <div class="card-header"></div>
      <div class="card-body">
        <h5 class="card-title text-center">${this.category.name}</h5>
      </div>
    </div>
    `;
  }
}
