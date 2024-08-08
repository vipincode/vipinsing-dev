import { cva, type VariantProps } from 'class-variance-authority';

export const variants = cva(['shadow-sm', 'rounded'], {
  variants: {
    variant: {
      primary: ['bg-white', 'dark:bg-black', 'dark:text-gray-100'],
      secondary: ['dark:bg-primary-600', 'dark:text-white', 'bg-primary-200', 'text-primary-600'],
    },
    size: {
      small: ['py-4', 'px-4'],
      medium: ['px-6', 'py-6'],
      large: ['px-8', 'py-8'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'small',
  },
});

export type BoxVariants = VariantProps<typeof variants>;
