import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { store } from '../../../redux/store';
import { connect } from 'pwa-helpers/connect-mixin';

import { selectPage } from '../../../redux/actions/application';

import css from './style.pcss';
import template from './template.html';
import '../../objects/maf-screen';
import { toDutchDate } from '../../helpers/dutchDate';
export default class MafScreenPersonData extends connect(store)(
  PolymerElement
) {
  static get properties() {
    return {
      personData: {
        type: Object,
        value: {},
      },
    };
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

  _normalDate(date) {
    date = new Date(date);
    return toDutchDate(date);
  }

  _stateChanged(state) {
    if (state.person.data != undefined) {
      this.personData = state.person.data;
    }
  }
}

window.customElements.define('maf-screen-person-data', MafScreenPersonData);
