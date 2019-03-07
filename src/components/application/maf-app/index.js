import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { store } from '../../../redux/store';
import {
  selectPage,
  selectPageNoHistory,
} from '../../../redux/actions/application';
import { connect } from 'pwa-helpers/connect-mixin';

import css from './style.pcss';
import template from './template.html';
import '@polymer/iron-pages';
import '../maf-screen-avg-log';
import '../maf-screen-avg-logs';
import '../maf-screen-contract';
import '../maf-screen-contracts';
import '../maf-screen-home';
import '../maf-screen-journey';
import '../maf-screen-journeys';
import '../maf-screen-signin';
import '../maf-screen-person-data';
import '../../lib/maki-icons/maki-icon-home';
import '../../lib/maki-icons/maki-icon-search';
import '../../lib/maki-icons/maki-icon-bell';
import '../../lib/maki-icons/maki-icon-chat';

import { MakiTheme } from '../../lib/maki/maki-theme-provider';
import { primaryPalette, secondaryPalette } from '../../helpers/palettes';
import { requestOAuthHandle } from '../../../redux/actions/oauth';

export default class MafApp extends connect(store)(PolymerElement) {
  static get properties() {
    return {
      theme: {
        type: Object,
      },
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor() {
    super();
    window.onpopstate = function(event) {
      store.dispatch(selectPageNoHistory(event.state));
    };
    if (window.location.pathname && window.location.pathname.length > 0) {
      if (window.location.pathname.indexOf('oauth-itsme') > -1) {
        this._handleOAuth();
      }

      let path = window.location.pathname
        .split(/[/-]/)
        .filter((i) => i.length > 0);
      store.dispatch(selectPageNoHistory(path[0]));
    }
  }

  ready() {
    super.ready();
    // Check for userLogin dirty
    setTimeout(() => {
      if (store.getState().jwt.data.user === undefined) {
        store.dispatch(selectPageNoHistory('signin'));
      }
    }, 500);
    let theme = {
      palette: {
        primary: {
          light: '#d6dce2',
          main: primaryPalette[500],
          dark: primaryPalette[500],
        },
        secondary: {
          main: secondaryPalette[500],
        },
      },
      shadows: {},
    };

    for (let i = 0; i < 25; i++) {
      let color = i * 2 + 1;
      if (color < 10) {
        color = 10;
      }
      theme.shadows[i] = `0px ${i}px ${i * 2 - 1}px 0px rgba(0, 0, 0, ${color /
        100})`;
    }

    this.theme = new MakiTheme().set(theme);

    var self = this;

    const f = () => {
      setTimeout(function() {
        self.theme = new MakiTheme();
        setTimeout(function() {
          self.theme = new MakiTheme().set(theme);
          f();
        }, 3000);
      }, 1000);
    };

    // f();
  }

  _handleOAuth() {
    const url = decodeURI(window.location.href);
    const code = url.split('code=')[1].split('&')[0];
    const stateRaw = url.split('state=')[1].split('}')[0] + '}';
    const state = JSON.parse(stateRaw);

    store.dispatch(requestOAuthHandle(code, state.StateToken, 'itsme'));
  }

  _goHome() {
    store.dispatch(selectPage('home'));
  }

  _goJourneys() {
    store.dispatch(selectPage('journeys'));
  }

  _showTabs(page) {
    return page !== 'signin';
  }

  _nope() {
    let doPop = confirm(
      'Deze functie komt binnenkort beschikbaar! Op dit moment wordt er hard gewerkt aan nieuwe functionaliteiten van MijnApp.\n\nHeb je feedback? Laat het ons weten via de website. Klik op \'OK\' om naar de website te gaan.'
    );
    if (doPop) {
      window.open('https://mijn-app.io/', '_blank');
    }
  }

  _stateChanged(state) {
    this.page = state.application.page;
    if (
      state.application.page != undefined &&
      state.application.page == 'journeys' &&
      this.shadowRoot != null
    ) {
      this.shadowRoot.querySelector('#journeyScreen').focusOnSearch();
    }
  }
}

window.customElements.define('maf-app', MafApp);
