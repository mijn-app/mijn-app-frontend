import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { store } from '../../../redux/store';
import { connect } from 'pwa-helpers/connect-mixin';
import { selectPage } from '../../../redux/actions/application';
import { requestAvgLog } from '../../../redux/actions/avgLog';
import { ISO_8601_FULL } from '../../helpers/regex';
import { toDutchDateTime } from '../../helpers/dutchDate';

import css from './style.pcss';
import template from './template.html';
import '../../objects/maf-screen';

export default class MafScreenAvgLogs extends connect(store)(PolymerElement) {
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

  _mapObjToArr(obj) {
    let returnable = [];
    for (let i in obj) {
      if (obj[i]) {
        if (ISO_8601_FULL.test(obj[i])) {
          let date = new Date(obj[i]);
          returnable.push({ key: i, value: toDutchDateTime(date, true) });
        } else {
          returnable.push({ key: i, value: obj[i] });
        }
      }
    }
    return returnable
      .filter(
        (i) =>
          i.key !== 'id' &&
          i.key !== 'procesOmschrijving' &&
          i.key !== 'omschrijving' &&
          i.key !== 'bsn' &&
          i.key !== 'verwerkerOrganisatie'
      )
      .map((i) => ({
        ...i,
        key: i.key
          .replace(/^\w/, (c) => c.toUpperCase())
          .replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5'),
      }));
  }

  _onBack() {
    store.dispatch(selectPage('home'));
  }

  _clickHandler(e) {
    if (e.model.card && e.model.card.id) {
      store.dispatch(requestAvgLog(e.model.card.id));
      store.dispatch(selectPage('avg-log'));
    }
  }

  _stateChanged(state) {
    this.cards = state.avgLogs.data;
  }
}

window.customElements.define('maf-screen-avg-logs', MafScreenAvgLogs);
