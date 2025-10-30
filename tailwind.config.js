/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
            '50': '#eef9ff',
            '100': '#daf0ff',
            '200': '#bde6ff',
            '300': '#8fd7ff',
            '400': '#5abeff',
            '500': '#34a0fd',
            '600': '#1d82f3',
            '700': '#166bdf',
            '800': '#1751aa', //main
            '900': '#1a4b8e',
            '950': '#152e56',
        },

        backgroundMain: '#F6F0F0',
        accent: '#FEE002',
        accentDark: '#E1C600',
        primaryDark: "#0F3157",
        neutral: {
          light: "#f5f5f5",
          dark: "#212121",
          offwhite: "#f1f1f1"
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

