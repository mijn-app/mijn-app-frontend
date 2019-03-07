import { PolymerElement, html } from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

import '../../lib/maki/maki-header';
import '../../lib/maki/maki-button';
import '../../lib/maki-icons/maki-icon-search';
import '../../lib/maki-icons/maki-icon-back-arrow';

export default class MafScreen extends PolymerElement {
  static get properties() {
    return {
      heading: {
        type: String,
      },
      onBack: {
        type: Function,
        value: null,
      },
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  _hasBack() {
    return this.onBack !== null ? true : false;
  }

  _handleBack() {
    this.onBack();
  }

  constructor() {
    super();
  }
}

window.customElements.define('maf-screen', MafScreen);
