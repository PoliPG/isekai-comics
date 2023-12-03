import favicon from './extensions/favicon.png'

export default {
  config: {
    locales: ['es'],
    translations: {
      en: {
        'app.components.HomePage.welcome': 'Bienvenidos a bordo',
        'app.components.HomePage.welcome.again': 'Bienvenidos ',
      },
    },
    head: {
      favicon,
    },
    theme: {
      light: {
        colors: {
          primary100: '#fce4e5',
          primary200: '#faced0',
          primary500: '#e25159',
          buttonPrimary500: '#e25159',
          primary600: '#cf333b',
          buttonPrimary600: '#cf333b',
          primary700: '#af282f',
        }
      }
    }
  },
  bootstrap(app: any) {
  },
}
