import { addons } from '@storybook/manager-api';

const base = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

addons.setConfig({
  theme: {
    base,
    // brandTitle: '',
    // brandUrl: '',
    // brandTarget: '_self',
  },
});