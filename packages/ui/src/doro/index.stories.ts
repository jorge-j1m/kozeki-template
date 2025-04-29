import '@ui/global.css'

import type { Meta, StoryObj } from '@storybook/react'

import { Doro } from '.'

const meta: Meta<typeof Doro> = {
    title: 'Kozeki/doro',
    component: Doro
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
