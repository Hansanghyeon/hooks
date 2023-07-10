import type { Meta, StoryObj } from '@storybook/react'
import Composition from './useDeepMerge.composition'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'UseDeepMerge',
  component: Composition,
  // argTypes: {
  //   props: {
  //     control: 'text',
  //     description: '이미지',
  //     defaultValue: 'https://picsum.photos/48/48',
  //     table: {
  //       type: { summary: 'string | React.ReactNode' },
  //       defaultValue: {
  //         summary: 'https://picsum.photos/48/48',
  //       },
  //     },
  //   },
  // },
} satisfies Meta<typeof Composition>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  name: 'default'
}
