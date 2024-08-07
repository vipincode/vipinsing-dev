import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@/components/box';

const meta: Meta<typeof Box> = {
  title: 'Components/box',
  component: Box,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sed minus rerum reprehenderit! Repudiandae sed consectetur, minus voluptates magni cum similique. Quam sint quidem est corporis nulla officia, expedita modi!',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

export type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
export const Small: Story = {
  args: {
    size: 'small',
  },
};
export const Medium: Story = {
  args: {
    size: 'medium',
  },
};
export const Large: Story = {
  args: {
    size: 'large',
  },
};
export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
