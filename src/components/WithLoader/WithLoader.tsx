import React, { FC, ReactNode } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { IRoute } from '../../router';

interface Props {
  routes: IRoute[];
  children: ReactNode;
}

export const WithLoader = (Component: FC<Props>) => {
  const WithLoaderComponent = ({ routes, children }: Props) => {
    const { isLoading } = useAppSelector((state) => state.loading);
    return isLoading ? <div>Loading...</div> : <Component routes={routes}>{children}</Component>;
  };

  return WithLoaderComponent;
};
