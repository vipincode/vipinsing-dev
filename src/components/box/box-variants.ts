import { cva, type VariantProps } from 'class-variance-authority';

export const variants = cva(['shadow-sm', 'rounded'], {
  variants: {
    variant: {
      primary: ['p-5', 'bg-white', 'dark:bg-gray-900', 'dark:text-gray-100'],
      secondary: ['p-5', 'dark:bg-primary-600', 'dark:text-white', 'bg-primary-200', 'text-primary-600'],
    },
    size: {
      small: ['py-4', 'px-4'],
      medium: ['px-6', 'py-6'],
      large: ['px-8', 'py-8'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export type BoxVariants = VariantProps<typeof variants>;
