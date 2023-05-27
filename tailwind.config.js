/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './.storybook/**/*.tsx',
    './.storybook/**/*.ts',
    './.storybook/**/*.css',
    './.storybook/**/*.scss',
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.css',
    './src/**/*.scss',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@hyeon/mac-scrollbar')
  ],
}

