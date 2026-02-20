import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C9A84C',
          dark: '#1C1C1C',
          charcoal: '#2A2A2A',
          ash: '#3A3A3A',
        },
      },
    },
  },
  plugins: [],
}

export default config
