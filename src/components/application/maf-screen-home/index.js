import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { store } from '../../../redux/store';
import { connect } from 'pwa-helpers/connect-mixin';
import { selectPage } from '../../../redux/actions/application';
import { requestContracts } from '../../../redux/actions/contracts';
import { requestAvgLogs } from '../../../redux/actions/avgLogs';
import { requestPersonData } from '../../../redux/actions/person';

import css from './style.pcss';
import template from './template.html';

import '../../objects/maf-screen';
import '../../lib/maki/maki-input';

export default class MafScreenHome extends connect(store)(PolymerElement) {
  static get properties() {
    return {
      tiles: {
        type: Array,
        value: [
          {
            title: 'Basisgegevens',
            asset: '/assets/media/Basisgegevens.svg',
            target: 'person-data',
          },
          {
            title: 'Machtigingen',
            asset: '/assets/media/Machtigingen.svg',
            target: 'avg-logs',
          },
          {
            title: 'Contracten',
            asset: '/assets/media/Contracten.svg',
            target: 'contracts',
          },
          // {
          //   title: 'Passen',
          //   asset: '/assets/media/Passen.svg',
          //   target: '',
          // },
        ],
      },
      userID: String,
      loggedInWithItsMe: Boolean,
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor() {
    super();
  }

  ready() {
    super.ready();
    if (this.loggedInWithItsMe) {
      this._showToast();
    }
  }

  _clickHandler(e) {
    if (e.model == undefined) {
      let doPop = confirm(
        'Deze functie komt binnenkort beschikbaar! Op dit moment wordt er hard gewerkt aan nieuwe functionaliteiten van MijnApp.\n\nHeb je feedback? Laat het ons weten via de website. Klik op \'OK\' om naar de website te gaan.'
      );
      if (doPop) {
        window.open('https://mijn-app.io/', '_blank');
      }
    }
    if (e.model.tile && e.model.tile.target) {
      switch (e.model.tile.target) {
        case 'contracts':
          store.dispatch(requestContracts());
          break;
        case 'person-data':
          if (this.userID != undefined) {
            store.dispatch(requestPersonData(this.userID));
          } else {
            return;
          }
          break;
        case 'avg-logs':
          store.dispatch(requestAvgLogs());
          break;
        default:
          break;
      }
      store.dispatch(selectPage(e.model.tile.target));
    }
  }

  _goJourneys() {
    store.dispatch(selectPage('journeys'));
    // TODO: trigger search focus
  }

  _showToast() {
    this.$.ItsMeLoginToast.className = 'show';

    setTimeout(() => {
      this.$.ItsMeLoginToast.className = this.$.ItsMeLoginToast.className.replace('show', '');
    }, 5000);
  }

  _stateChanged(state) {
    if (state != undefined && state.jwt.data.user != undefined) {
      this.userID = state.jwt.data.user.id;
      this.loggedInWithItsMe = state.oauth.provider === 'itsme';
    }
  }
}

window.customElements.define('maf-screen-home', MafScreenHome);
