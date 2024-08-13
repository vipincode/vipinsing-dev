import { ComponentProps } from 'react';
import { type InputVariants, variants } from '@/components/input/input-variants';

type InputProps = ComponentProps<'input'> & InputVariants;

export const Input = ({ variant, ...props }: InputProps) => {
  return <input className={variants({ variant })} {...props} />;
};
