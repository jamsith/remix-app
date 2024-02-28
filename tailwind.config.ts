import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {colors: {
      // you can either spread `colors` to apply all the colors
      ...colors,
      // or add them one by one and name whatever you want
      amber: colors.amber,
      emerald: colors.emerald,
    }},
  },
  plugins: [],
} satisfies Config

