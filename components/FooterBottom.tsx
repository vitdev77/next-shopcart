import React from 'react';
import Logo from './Logo';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-6 border-t text-center text-sm text-gray-600">
      &copy; {currentYear} <Logo className="text-sm" />. All rights reserved.
    </div>
  );
};

export default FooterBottom;
