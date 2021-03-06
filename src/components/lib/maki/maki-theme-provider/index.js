import { PolymerElement, html } from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

export class MakiTheme {
  constructor(theme) {
    if (theme && theme instanceof MakiTheme) {
      this.theme = JSON.parse(JSON.stringify(theme.get()));
    } else {
      this.theme = {
        palette: {
          primary: {
            light: '#7986cb',
            main: '#3f51b5',
            dark: '#303f9f',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff4081',
            main: '#f50057',
            dark: '#c51162',
            contrastText: '#fff',
          },
          error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
          },
          grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#d5d5d5',
            A200: '#aaaaaa',
            A400: '#303030',
            A700: '#616161',
          },
          text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
          },
          divider: 'rgba(0, 0, 0, 0.12)',
          background: {
            paper: '#fff',
            default: '#fafafa',
          },
          action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.08)',
            hoverOpacity: 0.08,
            selected: 'rgba(0, 0, 0, 0.14)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
          },
        },
        shadows: {
          0: 'none',
          1: [
            '0px 1px 3px 0px rgba(0, 0, 0, 0.2),',
            '0px 1px 1px 0px rgba(0, 0, 0, 0.14),',
            '0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
          ].join(''),
          2: [
            '0px 1px 5px 0px rgba(0, 0, 0, 0.2),',
            '0px 2px 2px 0px rgba(0, 0, 0, 0.14),',
            '0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
          ].join(''),
          3: [
            '0px 1px 8px 0px rgba(0, 0, 0, 0.2),',
            '0px 3px 4px 0px rgba(0, 0, 0, 0.14),',
            '0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
          ].join(''),
          4: [
            '0px 2px 4px -1px rgba(0, 0, 0, 0.2),',
            '0px 4px 5px 0px rgba(0, 0, 0, 0.14),',
            '0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
          ].join(''),
          5: [
            '0px 3px 5px -1px rgba(0, 0, 0, 0.2),',
            '0px 5px 8px 0px rgba(0, 0, 0, 0.14),',
            '0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
          ].join(''),
          6: [
            '0px 3px 5px -1px rgba(0, 0, 0, 0.2),',
            '0px 6px 10px 0px rgba(0, 0, 0, 0.14),',
            '0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
          ].join(''),
          7: [
            '0px 4px 5px -2px rgba(0, 0, 0, 0.2),',
            '0px 7px 10px 1px rgba(0, 0, 0, 0.14),',
            '0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
          ].join(''),
          8: [
            '0px 5px 5px -3px rgba(0, 0, 0, 0.2),',
            '0px 8px 10px 1px rgba(0, 0, 0, 0.14),',
            '0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
          ].join(''),
          9: [
            '0px 5px 6px -3px rgba(0, 0, 0, 0.2),',
            '0px 9px 12px 1px rgba(0, 0, 0, 0.14),',
            '0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
          ].join(''),
          10: [
            '0px 6px 6px -3px rgba(0, 0, 0, 0.2),',
            '0px 10px 14px 1px rgba(0, 0, 0, 0.14),',
            '0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
          ].join(''),
          11: [
            '0px 6px 7px -4px rgba(0, 0, 0, 0.2),',
            '0px 11px 15px 1px rgba(0, 0, 0, 0.14),',
            '0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
          ].join(''),
          12: [
            '0px 7px 8px -4px rgba(0, 0, 0, 0.2),',
            '0px 12px 17px 2px rgba(0, 0, 0, 0.14),',
            '0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
          ].join(''),
          13: [
            '0px 7px 8px -4px rgba(0, 0, 0, 0.2),',
            '0px 13px 19px 2px rgba(0, 0, 0, 0.14),',
            '0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
          ].join(''),
          14: [
            '0px 7px 9px -4px rgba(0, 0, 0, 0.2),',
            '0px 14px 21px 2px rgba(0, 0, 0, 0.14),',
            '0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
          ].join(''),
          15: [
            '0px 8px 9px -5px rgba(0, 0, 0, 0.2),',
            '0px 15px 22px 2px rgba(0, 0, 0, 0.14),',
            '0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
          ].join(''),
          16: [
            '0px 8px 10px -5px rgba(0, 0, 0, 0.2),',
            '0px 16px 24px 2px rgba(0, 0, 0, 0.14),',
            '0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
          ].join(''),
          17: [
            '0px 8px 11px -5px rgba(0, 0, 0, 0.2),',
            '0px 17px 26px 2px rgba(0, 0, 0, 0.14),',
            '0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
          ].join(''),
          18: [
            '0px 9px 11px -5px rgba(0, 0, 0, 0.2),',
            '0px 18px 28px 2px rgba(0, 0, 0, 0.14),',
            '0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
          ].join(''),
          19: [
            '0px 9px 12px -6px rgba(0, 0, 0, 0.2),',
            '0px 19px 29px 2px rgba(0, 0, 0, 0.14),',
            '0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
          ].join(''),
          20: [
            '0px 10px 13px -6px rgba(0, 0, 0, 0.2),',
            '0px 20px 31px 3px rgba(0, 0, 0, 0.14),',
            '0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
          ].join(''),
          21: [
            '0px 10px 13px -6px rgba(0, 0, 0, 0.2),',
            '0px 21px 33px 3px rgba(0, 0, 0, 0.14),',
            '0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
          ].join(''),
          22: [
            '0px 10px 14px -6px rgba(0, 0, 0, 0.2),',
            '0px 22px 35px 3px rgba(0, 0, 0, 0.14),',
            '0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
          ].join(''),
          23: [
            '0px 11px 14px -7px rgba(0, 0, 0, 0.2),',
            '0px 23px 36px 3px rgba(0, 0, 0, 0.14),',
            '0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
          ].join(''),
          24: [
            '0px 11px 15px -7px rgba(0, 0, 0, 0.2),',
            '0px 24px 38px 3px rgba(0, 0, 0, 0.14),',
            '0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
          ].join(''),
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
          fontSize: '14px',
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
        },
        shape: {
          borderRadius: 4,
        },
        transitions: {
          easing: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
          },
          duration: {
            shortest: '150ms',
            shorter: '200ms',
            short: '250ms',
            standard: '300ms',
            complex: '375ms',
            enteringScreen: '225ms',
            leavingScreen: '195ms',
          },
        },
        zIndex: {},
      };
    }
  }

  set(settings) {
    // TODO: Clean this up into something recursive. I was lazy. ~Paul
    for (let a in settings) {
      if (settings[a] !== null && typeof settings[a] === 'object') {
        for (let b in settings[a]) {
          if (settings[a][b] !== null && typeof settings[a][b] === 'object') {
            for (let c in settings[a][b]) {
              if (
                settings[a][b][c] !== null &&
                typeof settings[a][b][c] === 'object'
              ) {
                for (let d in settings[a][b][c]) {
                  if (
                    settings[a][b][c][d] &&
                    this.theme[a][b][c][d] &&
                    typeof settings[a][b][c][d] !== 'object'
                  ) {
                    this.theme[a][b][c][d] = settings[a][b][c][d];
                  }
                }
              } else {
                if (settings[a][b][c] && this.theme[a][b][c]) {
                  this.theme[a][b][c] = settings[a][b][c];
                }
              }
            }
          } else {
            if (settings[a][b] && this.theme[a][b]) {
              this.theme[a][b] = settings[a][b];
            }
          }
        }
      } else {
        if (settings[a] && this.theme[a]) {
          this.theme[a] = settings[a];
        }
      }
    }
    return new MakiTheme(this);
  }

  get() {
    return this.theme;
  }
}

export const defaultMakiTheme = () => new MakiTheme();

export default class MakiThemeProvider extends PolymerElement {
  static get properties() {
    return {
      theme: {
        type: Object,
        value: null,
        observer: '_setTheme',
      },
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
    this._setTheme();
  }

  _setTheme() {
    let theme = this.theme;
    if (!theme) {
      theme = new MakiTheme();
    }
    this._setProp(theme.get(), '');
  }

  _setProp(object, prefix) {
    for (let i in object) {
      if (object[i] !== null && typeof object[i] === 'object') {
        this._setProp(object[i], `${prefix}${i}-`);
      } else {
        this.style.setProperty(`--${prefix}${i}`, object[i]);
      }
    }
  }
}

window.customElements.define('maki-theme-provider', MakiThemeProvider);
