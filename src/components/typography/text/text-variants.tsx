import { cva, type VariantProps } from 'class-variance-authority';

export const variants = cva(['text-gray-600', 'dark:text-gray-200'], {
  variants: {
    variant: {
      DEFAULT: ['text-base', 'font-medium', 'leading-7'],
      xs: ['text-xs', 'font-thin', 'leading-4'],
      sm: ['text-sm', 'font-normal', 'leading-5'],
      md: ['text-lg', 'font-medium', 'leading-7'],
      lg: ['text-xl', 'font-bold', 'leading-8'],
    },
  },
  defaultVariants: {
    variant: 'DEFAULT',
  },
});

export type TextVariants = VariantProps<typeof variants>;
