module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var','ui-sans-serif','system-ui','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['"SF Mono"','"Fira Code"','"Fira Mono"','"Roboto Mono"','monospace']
    },
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'slide-down': 'slide-down 0.3s ease-out both',
        'slide-left': 'slide-left 0.3s ease-out both',
        'fade-in': 'fade-in 0.3s ease-out'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            'opacity': '0',
          },
          '100%': {
            'opacity': '1',
          },
        },
        'slide-down': {
          '0%': {
            '-webkit-transform': 'translateY(-200%)',
            transform: 'translateY(-200%)'
          },
          '100%': {
            '-webkit-transform': 'translateY(0%)',
            transform: 'translateY(0%)'
          },
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(200%)',
            transform: 'translateX(200%)'
          },
          '100%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'translateX(0%)'
          },
        },
      },
    },
  },
  plugins: [],
}