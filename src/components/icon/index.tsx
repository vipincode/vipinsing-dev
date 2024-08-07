import { type LucideIcon, Check, Heart } from 'lucide-react';
import { ComponentProps } from 'react';

export type IconProps = ComponentProps<LucideIcon> & {
  type: 'check' | 'heart';
};

const iconComponents: Record<IconProps['type'], LucideIcon> = {
  check: Check,
  heart: Heart,
};

export const Icon = ({ type, ...props }: IconProps) => {
  const IconComponent = iconComponents[type];
  return <IconComponent {...props} />;
};

export const icons = Object.keys(iconComponents) as IconProps['type'][];
