import { Icon } from '@/components/icon';
import React from 'react';
import { TextOutline } from '@/components/typography';

const Logo = () => {
  return (
    <>
      <Icon type="logo" size={34} className="text-gray-950 dark:text-gray-200" />
      <div className="font-bricolage text-3xl font-bold tracking-tighter text-gray-950 dark:text-gray-200">
        Vipin <TextOutline>Folio</TextOutline>
      </div>
    </>
  );
};

export default Logo;
