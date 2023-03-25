import React, { FC, useRef } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';

export const SigninForm: FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert('Invalid user!'));
  };

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailRef.current && passwordRef.current)
      signIn(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <form action=''>
      <input type='email' ref={emailRef} />
      <input type='password' ref={passwordRef} />
      <button type='submit' onClick={handleSignIn}>
        SignIn
      </button>
    </form>
  );
};
