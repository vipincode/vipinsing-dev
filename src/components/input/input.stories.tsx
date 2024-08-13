import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/input';

const meta: Meta<typeof Input> = {
  title: 'Components/input',
  component: Input,
  args: {
    variant: 'DEFAULT',
    placeholder: 'Input placeholder',
  },
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
    variant: 'DEFAULT',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Compact: Story = {
  args: {
    variant: 'compact',
  },
};

export const Dense: Story = {
  args: {
    variant: 'dense',
  },
};

export const Solo: Story = {
  args: {
    variant: 'solo',
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
  args: {
    variant: 'compact',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
