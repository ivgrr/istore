import React, { FC } from 'react';
import { SigninForm } from '../../components/SigninForm/SigninForm';

export const Signin: FC = () => {
  return (
    <div>
      <h3>Sign-in</h3>
      <SigninForm />
    </div>
  );
};
