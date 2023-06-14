import forms from '@tailwindcss/forms'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const deprecations = [
  'lightBlue',
  'warmGray',
  'trueGray',
  'coolGray',
  'blueGray'
]

for (const color of Object.keys(colors)) {
  if (deprecations.includes(color)) delete colors[color]
}

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors
      // override default colors here
    }
  },
  plugins: [forms],
  corePlugins: {
    preflight: false // disables default styles from overriding other custom styles
  }
} satisfies Config
