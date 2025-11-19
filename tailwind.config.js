/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      colors: {
        primary: {
            '50': '#f8fafc',
            '100': '#f1f5f9',
            '200': '#e2e8f0',
            '300': '#cbd5e1',
            '400': '#94a3b8',
            '500': '#64748b',
            '600': '#475569',
            '700': '#334155',
            '800': '#1e293b', //main
            '900': '#0f172a',
            '950': '#020617',
        },
        backgroundMain: '#0f172a',
        accent: '#FF6185',
        accentDark: '#FF6185',
        primaryDark: "#FF6185",
        neutral: {
          light: "#f9fafb",
          dark: "#09090b",
          offwhite: "#e4e4e7"
        }
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        subtitle: ['Figtree', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        bodyMedium: ['Poppins-Medium', 'sans-serif'],
        bodyBold: ['Poppins-Bold', 'sans-serif'],
      },
      lineHeight: {
        'extra-loose': '2.5',
        'custom-height': '2.2',
      },
    },
  },
  plugins: [],
}

