import LocalizedStrings from 'react-localization';
import en from './en.json';
import ar from './ar.json';

import ILocal from '../core/interfaces/ILocal';
export const local: ILocal = new LocalizedStrings({
  en: en,
  ar: ar,
});

export const toogleLanguage = (lang: string) => {
  if (lang === 'en') {
    localStorage.removeItem('MENTOR_LANG');

    local.setLanguage('en');
    localStorage.setItem('MENTOR_LANG', 'en');
  } else {
    localStorage.removeItem('MENTOR_LANG');

    local.setLanguage('ar');
    localStorage.setItem('MENTOR_LANG', 'ar');
  }

  window.location.href = '';
  // window.location.reload();
};

export const changeLanguage = () => {
  let lang = localStorage.getItem('MENTOR_LANG');
  if (lang !== null) {
    if (lang === 'en') {
      local.setLanguage('en');

      document.title = 'Link';
    } else {
      local.setLanguage('ar');

      document.title = 'Link';
    }
  } else {
    local.setLanguage('en');
    localStorage.setItem('MENTOR_LANG', 'en');
    document.title = 'Link';
  }
};

export const getLanguage = () => {
  let lang = localStorage.getItem('MENTOR_LANG');
  if (lang !== null) {
    return lang;
  }
};
