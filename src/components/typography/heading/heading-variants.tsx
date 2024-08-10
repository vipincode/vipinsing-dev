import { cva, type VariantProps } from 'class-variance-authority';

export const h2Variants = cva(['text-gray-950 dark:text-gray-100 font-bricolage font-semibold'], {
  variants: {
    variant: {
      xs: ['text-base', 'leading-5'],
      sm: ['text-lg', 'leading-6'],
      md: ['text-2xl', 'leading-7'],
      lg: ['text-3xl', 'leading-9'],
    },
  },
  defaultVariants: {
    variant: 'md',
  },
});

export const h3Variants = cva(['text-gray-950 dark:text-gray-100 font-bricolage font-semibold'], {
  variants: {
    variant: {
      xs: ['text-base', 'leading-5'],
      sm: ['text-sm', 'leading-6'],
      md: ['text-lg', 'leading-7'],
      lg: ['text-xl', 'leading-8'],
    },
  },
  defaultVariants: {
    variant: 'md',
  },
});

export type Heading2Variants = VariantProps<typeof h2Variants>;
export type Heading3Variants = VariantProps<typeof h3Variants>;
