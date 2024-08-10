import { ComponentProps } from 'react';
import {
  h2Variants,
  h3Variants,
  type Heading2Variants,
  type Heading3Variants,
} from '@/components/typography/heading/heading-variants';

type Heading2Props = ComponentProps<'h2'> & Heading2Variants;
type Heading3Props = ComponentProps<'h3'> & Heading3Variants;

export const H2 = ({ variant, className, ...rest }: Heading2Props) => {
  return <h2 className={h2Variants({ variant, className })} {...rest} />;
};

export const H3 = ({ variant, className, ...rest }: Heading3Props) => {
  return <h3 className={h3Variants({ variant, className })} {...rest} />;
};
