/**
 * Sample product model for the dummy app
 */
import { computed, action } from 'easy-peasy';
import { Language } from 'types/languages';
import { LanguagesModel } from 'types/model-types';

const languages = [
  { name: 'English', code: 'en' },
  { name: 'हिन्दी', code: 'hi' },
  { name: 'मराठी', code: 'mr' },
];

export const languagesModel: LanguagesModel = {
  items: languages,
  currentLanguage: {
    name: '',
    code: '',
  },
  getByCode: computed((state) =>
    // 👇 return a function that accepts an "id" argument
    (code: Language['code']) =>
      state.items.find((language: Language) => language.code === code),
  ),
  selectLanguage: action((state, payload: Language) => {
    state.currentLanguage = payload;
  }),
};
