import colors from 'vuetify/es5/util/colors'
const oliveTheme = {
  primary: '#4169e1',
  accent: '#ff5959',
  secondary: '#ffc0cb',
  info: '#fff0f5',
  warning: colors.amber.base,
  error: colors.deepOrange.accent4,
  success: colors.green.accent3
}


export default {
  theme: {
    themes: {
      light: oliveTheme,
      dark: oliveTheme
    }
  }
}