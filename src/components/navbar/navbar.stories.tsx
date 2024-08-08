import { Meta, type StoryObj } from '@storybook/react';
import { Navbar } from '@/components/navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/navbar',
  component: Navbar,
};

export default meta;

export type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {};
export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
