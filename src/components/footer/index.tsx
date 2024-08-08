import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="text-center text-sm  tracking-wide font-light">
        &copy;{new Date().getFullYear()} all right reserved
      </div>
    </footer>
  );
};

export default Footer;
