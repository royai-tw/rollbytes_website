import type { Config } from 'tailwindcss'

/** Tailwind CSS 設定檔 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /** RollBytes 品牌色 */
        brand: {
          primary: '#1a1a2e',
          secondary: '#16213e',
          accent: '#0f3460',
          highlight: '#e94560',
        },
      },
    },
  },
  plugins: [],
}
export default config
