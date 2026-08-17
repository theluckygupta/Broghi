module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Palette extracted from the provided logo (approximate values)
        primary: {
          DEFAULT: '#00A6E6',
          50: '#E8F9FF',
          100: '#D6F3FF',
          200: '#AEE8FF',
          300: '#7ED7FF',
          400: '#3FC2F7',
          500: '#00A6E6',
          600: '#0087C2',
          700: '#006B9B',
          800: '#025273',
          900: '#01334A'
        },
        accent: {
          DEFAULT: '#66C7F0'
        },
        neutral: {
          50: '#F7F8F9',
          100: '#EEF1F3',
          200: '#E1E6EA',
          300: '#C9CFD4',
          400: '#AEB7BD',
          500: '#90979C',
          600: '#6B7378',
          700: '#4A5256',
          800: '#2B3235',
          900: '#111417'
        }
      },
      fontFamily: {
        // Auto-picked Google Fonts: Poppins for headings and Inter for body
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
}
