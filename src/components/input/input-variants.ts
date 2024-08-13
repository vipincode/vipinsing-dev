import { cva, type VariantProps } from 'class-variance-authority';

export const variants = cva(['px-3', 'py-2', 'rounded', 'outline-none'], {
  variants: {
    variant: {
      compact: ['text-primary-500', 'bg-primary-100', 'dark:border-gray-950', 'dark:text-gray-400'],
      dense: ['bg-gray-200', 'text-gray-900', 'dark:border-gray-950', 'dark:text-gray-400'],
      solo: ['dark:border-gray-950', 'dark:text-gray-400', 'bg-secondary-300', 'text-secondary-500'],
      outline: ['border', 'border-gray-400', 'text-gray-800', 'dark:border-gray-950', 'dark:text-gray-400'],
      DEFAULT: ['bg-white', 'text-gray-600', 'dark:bg-gray-950', 'dark:text-gray-300'],
    },
  },
  defaultVariants: {
    variant: 'DEFAULT',
  },
});

export type InputVariants = VariantProps<typeof variants>;
