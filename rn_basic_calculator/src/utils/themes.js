import {COLOR} from './styles';

const THEMING = {
  PINKISH: 'PINKISH',
  GREENISH: 'GREENISH',
};

const THEME = {
  [THEMING.PINKISH]: {
    meta: {
      type: THEMING.PINKISH,
    },
    mainScreen: {
      isDarkish: true,
    },
    calcButton: {
      color: COLOR.BLACK,
      textColor: COLOR.WHITE,
    },
    mainButton: {
      colors: COLOR.PINKISH,
      textColor: COLOR.WHITE,
    },
  },
  [THEMING.GREENISH]: {
    meta: {
      type: THEMING.GREENISH,
    },
    mainScreen: {
      isDarkish: false,
    },
    calcButton: {
      color: COLOR.GREY,
      textColor: COLOR.BLACK,
    },
    mainButton: {
      colors: COLOR.GREENISH,
      textColor: COLOR.WHITE,
    },
  },
};

export {THEME, THEMING};
