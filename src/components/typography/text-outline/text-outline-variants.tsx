import { cva, type VariantProps } from 'class-variance-authority';

export const variants = cva(['text-outline font-poppins'], {
  variants: {
    variant: {
      sm: ['text-2xl font-bold leading-[30px]'],
      md: ['text-3xl font-bold leading-[36px]'],
      lg: ['text-8xl font-bold leading-[110px]'],
      xl: ['text-9xl font-bold leading-[152px]'],
    },
  },
  defaultVariants: {
    variant: 'md',
  },
});

export type TextOutlineVariants = VariantProps<typeof variants>;
