import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { store } from '../../../redux/store';
import { connect } from 'pwa-helpers/connect-mixin';
import '@polymer/iron-pages';

import css from './style.pcss';
import template from './template.html';

import '../../objects/maf-screen';
import '../../lib/maki/maki-input';
import { selectPage } from '../../../redux/actions/application';

import '../../lib/playback-screens/playback-screen-agree';
import '../../lib/playback-screens/playback-screen-calendar';
import '../../lib/playback-screens/playback-screen-end';
import '../../lib/playback-screens/playback-screen-error';
import '../../lib/playback-screens/playback-screen-multiple';
import '../../lib/playback-screens/playback-screen-multiple-text';
import '../../lib/playback-screens/playback-screen-radio-buttons';
import '../../lib/playback-screens/playback-screen-single';
import '../../lib/playback-screens/playback-screen-start';
import '../../lib/playback-screens/playback-screen-text';
import '../../lib/playback-screens/playback-screen-video';

export default class MafScreenJourney extends connect(store)(PolymerElement) {
  static get properties() {
    return {};
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor() {
    super();
  }

  _onBack() {
    store.dispatch(selectPage('home'));
  }

  focusOnSearch() {
    this.shadowRoot.querySelector('maki-input').focus();
    const makiInput = this.shadowRoot.querySelector('maki-input');
    makiInput.shadowRoot.querySelector('.Input').focus();
  }

  _stateChanged(state) {
    this.journey = state.journey;
    this.id =
      state.order.current === 'START'
        ? 'START'
        : state.order.data[state.order.current].question;
    if (this.id === 'START') {
      this.question = { type: 'start' };
    } else if (this.id === 'END') {
      this.question = { type: 'end' };
    } else if (this.journey) {
      this.question = (this.journey.questions || []).find(
        (q) => q.id === this.id
      );
    }
    if (!this.question) {
      this.question = '';
    }
    this.screen = this.question.type;
  }
}

window.customElements.define('maf-screen-journey', MafScreenJourney);
