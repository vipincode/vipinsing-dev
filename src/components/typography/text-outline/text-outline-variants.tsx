import { cva, type VariantProps } from 'class-variance-authority';

export const variants = cva(['text-outline '], {
  variants: {
    variant: {
      'text-md': ['text-6xl font-bold leading-[72px]'],
      'text-lg': ['text-8xl font-bold leading-[110px]'],
      'text-xl': ['text-9xl font-bold leading-[152px]'],
    },
  },
  defaultVariants: {
    variant: 'text-md',
  },
});

export type TextOutlineVariants = VariantProps<typeof variants>;
