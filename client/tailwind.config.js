/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./public/index.html",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#790316',
        customBlue: '#0ea5a1',
        customDark: '#001f1f'
      },
      keyframes: {
        slideFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%': { transform: 'translateX(100%)', opacity: '0.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { transform: 'translateX(-100%)', opacity: '0.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        view: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideFromRight: 'slideFromRight 2s ease-out forwards',
        slideFromLeft: 'slideFromLeft 2s ease-out forwards',
        view: 'view 1s ease-out',
      }
    }
  },
  plugins: [],
}
