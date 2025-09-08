// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class', // ← Penting
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        text: {
          light: '#2D3748',
          dark: '#E2E8F0',
        },
        background: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },
        border: {
          light: '#E2E8F0',
          dark: '#374151',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}