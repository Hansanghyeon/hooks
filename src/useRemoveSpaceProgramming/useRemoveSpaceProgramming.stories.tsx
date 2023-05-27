import type { Meta, StoryObj } from '@storybook/react'
import Composition from './useRemoveSpaceProgramming.composition'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'useRemoveSpaceProgramming',
  component: Composition,
} satisfies Meta<typeof Composition>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {}
