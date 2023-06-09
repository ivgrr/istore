import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { privateRoutes, publicRoutes } from './index';

export const AppRouter: FC = () => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path}></Route>
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path}></Route>
      ))}
    </Routes>
  );
};
