import { cva, type VariantProps } from 'class-variance-authority';

export const variants = cva(['text-outline', 'font-bold', 'font-poppins'], {
  variants: {
    variant: {
      sm: ['text-lg', 'lg:text-2xl', 'leading-[30px]'],
      md: ['text-3xl', 'lg:text-3xl', 'leading-[36px]'],
      lg: ['text-4xl', 'lg:text-8xl', ' leading-[110px]'],
      xl: ['text-6xl', 'lg:text-9xl', ' leading-[152px]'],
    },
  },
  defaultVariants: {
    variant: 'md',
  },
});

export type TextOutlineVariants = VariantProps<typeof variants>;
