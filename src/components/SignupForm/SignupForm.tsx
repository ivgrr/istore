import { getApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { FC, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseConfig } from '../../firebase';
import { useAppDispatch } from '../../hooks/redux';
import { RouteNames } from '../../router';
import { setUser } from '../../store/slices/userSlice';

export const SignupForm: FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signUp = (email: string, password: string) => {
    console.log(firebaseConfig);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate(RouteNames.INDEX);
      })
      .catch(console.error);
  };

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(emailRef.current?.value);
    if (emailRef.current && passwordRef.current)
      signUp(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <form action=''>
      <input type='email' ref={emailRef} />
      <input type='password' ref={passwordRef} />
      <button type='submit' onClick={handleSignUp}>
        Signup
      </button>
    </form>
  );
};
