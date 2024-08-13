import { ComponentProps } from 'react';
import { type ButtonVariants, variants } from '@/components/button/button-variants';

type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return <button className={variants({ variant, size, className })} {...props} />;
};
