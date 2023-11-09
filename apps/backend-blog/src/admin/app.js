const config = {
  locales: [
     'en',
     'es-ES'
  ],
  theme: {
    light: {
      colors: {
        primary100: '#c9ffeb',
        primary200: '#5effc3',
        primary500: '#00f298',
        buttonPrimary500: '#fff298',
        primary600: '#00bd77',
        buttonPrimary600: '#ffbd77',
        primary700: '#008755',
      }
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
