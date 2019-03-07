import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { store } from '../../../redux/store';
import { connect } from 'pwa-helpers/connect-mixin';

import { setJourney } from '../../../redux/actions/journey';
import { selectPage } from '../../../redux/actions/application';

import css from './style.pcss';
import template from './template.html';

import '../../objects/maf-screen';
import '../../lib/maki/maki-input';

export default class MafScreenJourneys extends connect(store)(PolymerElement) {
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

  _selectJourneyA() {
    store.dispatch(setJourney(this.journeys[0]));
    store.dispatch(selectPage('journey'));
  }
  _selectJourneyB() {
    store.dispatch(setJourney(this.journeys[1]));
    store.dispatch(selectPage('journey'));
  }

  focusOnSearch() {
    this.shadowRoot.querySelector('maki-input').focus();
    const makiInput = this.shadowRoot.querySelector('maki-input');
    makiInput.shadowRoot.querySelector('.Input').focus();
  }

  _stateChanged(state) {
    this.journeys = state.journeys.data;
  }
}

window.customElements.define('maf-screen-journeys', MafScreenJourneys);
