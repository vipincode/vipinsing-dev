import {
  type LucideIcon,
  Check,
  Heart,
  Rotate3D,
  Home,
  User,
  Layers,
  ClipboardPenLine,
  MessageSquareText,
} from 'lucide-react';
import { ComponentProps } from 'react';

export type IconProps = ComponentProps<LucideIcon> & {
  type: 'check' | 'heart' | 'logo' | 'home' | 'user' | 'layers' | 'writing' | 'chat';
};

const iconComponents: Record<IconProps['type'], LucideIcon> = {
  check: Check,
  heart: Heart,
  logo: Rotate3D,
  home: Home,
  user: User,
  layers: Layers,
  writing: ClipboardPenLine,
  chat: MessageSquareText,
};

export const Icon = ({ type, ...props }: IconProps) => {
  const IconComponent = iconComponents[type];
  return <IconComponent {...props} />;
};

export const icons = Object.keys(iconComponents) as IconProps['type'][];
