import { ComponentProps } from 'react';
import { type BoxVariants, variants } from '@/components/box/box-variants';

type BoxProps = ComponentProps<'div'> & BoxVariants;

export const Box = ({ variant = 'primary', size = 'medium', className, ...props }: BoxProps) => {
  return <div className={variants({ variant, size, className })} {...props} />;
};
