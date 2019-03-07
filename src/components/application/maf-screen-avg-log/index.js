import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { store } from '../../../redux/store';
import { connect } from 'pwa-helpers/connect-mixin';
import { selectPage } from '../../../redux/actions/application';
import { clearAvgLog } from '../../../redux/actions/avgLog';
import { ISO_8601_FULL } from '../../helpers/regex';
import { toDutchDateTime } from '../../helpers/dutchDate';

import css from './style.pcss';
import template from './template.html';
import '../../objects/maf-screen';

export default class MafScreenAvgLog extends connect(store)(PolymerElement) {
  static get properties() {
    return {};
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  _isSame(a, b) {
    return a === b;
  }
  _isNotSame(a, b) {
    return a !== b;
  }

  _capitalize(s) {
    return s ? s.replace(/^\w/, (c) => c.toUpperCase()) : null;
  }

  _getLogoStyle(logo) {
    return `background-image: url("${logo}")`;
  }

  _mapObjToArr(obj) {
    let returnable = [];
    for (let i in obj) {
      if (obj[i]) {
        if (!(obj[i] !== null && typeof obj[i] === 'object')) {
          if (ISO_8601_FULL.test(obj[i])) {
            let date = new Date(obj[i]);
            returnable.push({ key: i, value: toDutchDateTime(date) });
          } else {
            returnable.push({ key: i, value: obj[i] });
          }
        }
        if (obj[i] !== null && typeof obj[i] === 'object') {
          returnable.push({ key: i, values: [...this._mapObjToArr(obj[i])] });
        }
      }
    }
    return returnable
      .filter(
        (i) =>
          i.key !== 'id' &&
          i.key !== 'procesOmschrijving' &&
          i.key !== 'opgevraagdeElementen' &&
          i.key !== 'omschrijving'
      )
      .map((i) => ({
        ...i,
        key: i.key
          .replace(/^\w/, (c) => c.toUpperCase())
          .replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5'),
      }));
  }

  constructor() {
    super();
  }

  _backToAvgLogs() {
    store.dispatch(selectPage('avg-logs'));
  }

  _stateChanged(state) {
    this.avgLog = state.avgLog.data;
  }
}

window.customElements.define('maf-screen-avg-log', MafScreenAvgLog);
