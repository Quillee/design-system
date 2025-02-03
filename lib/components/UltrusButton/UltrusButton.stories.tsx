import type { Meta, StoryObj } from '@storybook/react'

import { UltrusButton } from './UltrusButton'

const meta: Meta<typeof UltrusButton> = {
    component: UltrusButton,
}

export default meta

type Story = StoryObj<typeof UltrusButton>

export const Default: Story = {
    args: {
        children: 'Click me!',
    },
}

export const Secondary: Story = {
    args: {
        children: '😅',
        sx: {
            color: 'red',
            background: '#f3f3e3',
        },
    },
}
