import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          blue: '#E2E8F0',
        },

        neutral: {
          light: '#E5E5E5',
        },
        stone: {
          grey: '#E7E5E4',
        },
        // linkOrange: "#f97316",
      },
    },
    darkMode: 'class',
    plugins: [nextui()],
  },
};

export default config;
