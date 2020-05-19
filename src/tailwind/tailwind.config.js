module.exports = {
  purge: {
    mode: 'all',
    content: [
      'src/**/*.js',
      'public/**/*.html',
    ],
  },
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
      mono: ['monospace'],
    },
    colors: {
      "default": "var(--color-default)",
      "primary": "var(--color-primary)",
      "content": "var(--color-content)",
    },
    animations: {
      'spin': {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
    },
    extend: {
    }
  },
  variants: {
  },
  plugins: [
    require('tailwindcss-animations'),
  ],
}
