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
  },
  bootstrap(app: any) {
    console.log(app)
  },
}
