import { ComponentProps } from 'react';
import { variants, type TextVariants } from '@/components/typography/text/text-variants';

type TextProps = ComponentProps<'p'> & TextVariants;

export const Text = ({ variant, className, ...props }: TextProps) => {
  return <p className={variants({ variant, className })} {...props} />;
};
