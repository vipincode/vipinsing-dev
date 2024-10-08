import { ComponentProps } from 'react';
import { type TextOutlineVariants, variants } from '@/components/typography/text-outline/text-outline-variants';

type TextOutlineProps = ComponentProps<'span'> & TextOutlineVariants;

export const TextOutline = ({ variant, className, ...props }: TextOutlineProps) => {
  return <span className={variants({ variant, className })} {...props} />;
};
