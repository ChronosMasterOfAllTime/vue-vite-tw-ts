import { GlobalThemeOverrides } from 'naive-ui'

/**
 * Theme configuration for the application.
 * This configuration is used to set the colors and styles for various components in the application.
 * It is used in the `app.vue` file to apply the theme globally.
 * The theme configuration is based on the Naive UI library.
 * The colors are defined using hex values and can be customized as per the application's requirements.
 * The font family and size are also defined in this configuration.
 * The `Form` component's label font size is set to a medium size for both left and top labels.
 * This can be as granular as needed, allowing for different font sizes for different components.
 * This adjusts the global styling for all components in the application.
 */
export const appTheme: (dark?: boolean) => GlobalThemeOverrides = (
  dark = false
) => {
  const colors: GlobalThemeOverrides['common'] = dark
    ? {
        primaryColor: '#36ad6a',
        primaryColorHover: '#18a058',
        primaryColorPressed: '#0c7a43',
        primaryColorSuppl: '#36ad6a',
        infoColor: '#4098fc',
        infoColorHover: '#2080f0',
        infoColorPressed: '#1060c9',
        infoColorSuppl: '#4098fc',
        successColor: '#36ad6a',
        successColorHover: '#18a058',
        successColorPressed: '#0c7a43',
        successColorSuppl: '#36ad6a',
        warningColor: '#fcb040',
        warningColorHover: '#f0a020',
        warningColorPressed: '#c97c10',
        warningColorSuppl: '#fcb040',
        errorColor: '#de576d',
        errorColorHover: '#d03050',
        errorColorPressed: '#ab1f3f',
        errorColorSuppl: '#de576d'
      }
    : {
        primaryColor: '#18a058',
        primaryColorHover: '#36ad6a',
        primaryColorPressed: '#0c7a43',
        primaryColorSuppl: '#36ad6a',
        infoColor: '#2080f0',
        infoColorHover: '#4098fc',
        infoColorPressed: '#1060c9',
        infoColorSuppl: '#4098fc',
        successColor: '#18a058',
        successColorHover: '#36ad6a',
        successColorPressed: '#0c7a43',
        successColorSuppl: '#36ad6a',
        warningColor: '#f0a020',
        warningColorHover: '#fcb040',
        warningColorPressed: '#c97c10',
        warningColorSuppl: '#fcb040',
        errorColor: '#d03050',
        errorColorHover: '#de576d',
        errorColorPressed: '#ab1f3f',
        errorColorSuppl: '#de576d'
      }

  const theme: GlobalThemeOverrides = {
    common: {
      ...colors,
      cardColor: 'var(--background-color)',
      fontFamily: 'Inter',
      fontSize: '1rem'
    },
    Form: {
      labelFontSizeLeftMedium: '1rem',
      labelFontSizeTopMedium: '1rem'
    }
  }

  return theme
}
