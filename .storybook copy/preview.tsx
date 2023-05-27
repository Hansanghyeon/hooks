import React from 'react'
import type { Parameters } from "@storybook/react"
import { DocsContainer } from '@storybook/addon-docs'
import { addons } from '@storybook/addons'
import {
  DARK_MODE_EVENT_NAME,
} from 'storybook-dark-mode';
import './style/main.scss'

const channel = addons.getChannel()

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: (props: any) => {
      const [isDark, setDark] = React.useState()

      React.useEffect(() => {
        channel.on(DARK_MODE_EVENT_NAME, setDark)
        return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark)
      }, [channel, setDark])

      /**
       * darkMode: {
       *   stylePreview: true,
       * }
       * 해당옵션은있는데 docs에서는 이 옵션이 없어서 변경한다.
       */
      React.useEffect(() => {
        isDark
          ? document.querySelector('body')?.classList.replace('light', 'dark')
          : document.querySelector('body')?.classList.replace('dark', 'light')
      }, [isDark])

      return (
        <div>
          <DocsContainer {...props} />
        </div>
      )
    },
  },
  darkMode: {
    stylePreview: true,
  },
}

export const decorators = [
  (Story) => (
    <>
      <div className='not-prose'>
        <Story />
      </div>
    </>
  ),
];

