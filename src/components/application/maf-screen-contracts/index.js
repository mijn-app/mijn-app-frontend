import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { store } from '../../../redux/store';
import { connect } from 'pwa-helpers/connect-mixin';
import { selectPage } from '../../../redux/actions/application';
import { requestContract } from '../../../redux/actions/contract';

import css from './style.pcss';
import template from './template.html';
import '../../objects/maf-screen';

export default class MafScreenContracts extends connect(store)(PolymerElement) {
  static get properties() {
    return {};
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor() {
    super();
  }

  _isSet(item) {
    return item && item.length > 0;
  }

  _onBack() {
    store.dispatch(selectPage('home'));
  }

  _mapObjToArr(obj) {
    let returnable = [];
    for (let i in obj) {
      if (obj[i]) {
        returnable.push({ key: i, value: obj[i] });
      }
    }
    return returnable
      .filter(
        (i) =>
          i.key !== 'id' &&
          i.key !== 'titel' &&
          i.key !== 'omschrijving' &&
          i.key !== 'bsn' &&
          i.key !== 'organisatie'
      )
      .map((i) => ({
        ...i,
        key: i.key
          .replace(/^\w/, (c) => c.toUpperCase())
          .replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5'),
      }));
  }

  _clickHandler(e) {
    if (e.model.card && e.model.card.id) {
      store.dispatch(requestContract(e.model.card.id));
      store.dispatch(selectPage('contract'));
    }
  }

  _stateChanged(state) {
    this.cards = state.contracts.data;
  }
}

window.customElements.define('maf-screen-contracts', MafScreenContracts);
