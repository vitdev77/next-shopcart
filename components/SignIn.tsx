import * as React from 'react';
import { SignInButton } from '@clerk/nextjs';

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold text-shop-lightColor hover:text-shop-darkColor hover:cursor-pointer hoverEffect">
        Login
      </button>
    </SignInButton>
  );
};

export default SignIn;
