import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@iconify/react'

import { TextInput, TextInputRootProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon>
          <Icon icon='mdi:email-outline' />
        </TextInput.Icon>
        <TextInput.Input placeholder='Type your e-mail address' />
      </>
    )
  },
  argTypes: {
    children: {
      table: { disable: true }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
