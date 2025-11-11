import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terra: {
          navy: '#0D3B66',
          teal: '#0B4F6C',
          blue: '#1767B3',
          'bright-blue': '#3778CB',
          green: '#64A03B',
          'bright-green': '#79C048',
          charcoal: '#333333',
          caution: '#E6A800',
          danger: '#DC2626',
          neutral: '#6B7280',
        },
      },
    },
  },
  plugins: [],
};
export default config;
