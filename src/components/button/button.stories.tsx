import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button';

const meta: Meta<typeof Button> = {
  title: 'Components/button',
  component: Button,
  args: {
    children: 'button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
      description: 'Text to display on the button',
      // table: {
      //   disable: true,
      // },
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

export type Story = StoryObj<typeof Button>;

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
export const Destructive: Story = {
  args: {
    variant: 'destructive',
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
