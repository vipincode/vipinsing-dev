import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/input';

const meta: Meta<typeof Input> = {
  title: 'Components/input',
  component: Input,
  argTypes: {
    variant: {
      control: 'select',
      options: ['DEFAULT', 'outline', 'dense', 'solo', 'compact'],
    },
  },
};

export default meta;

export type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Default button',
  },
};

export const Outline: Story = {
  args: {
    placeholder: 'Outline button',
    variant: 'outline',
  },
};

export const Compact: Story = {
  args: {
    placeholder: 'Extra small button',
    variant: 'compact',
  },
};

export const Dense: Story = {
  args: {
    placeholder: 'Small button',
    variant: 'dense',
  },
};

export const Solo: Story = {
  args: {
    placeholder: 'Medium button',
    variant: 'solo',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Dark theme text',
  },
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  args: {
    placeholder: 'Mobile input',
    variant: 'compact',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
