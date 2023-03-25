import { useAppSelector } from './redux';

export const useAuth = () => {
  const { id, email, token, isAuth } = useAppSelector((state) => state.user);

  return {
    id,
    isAuth,
    email,
    token,
  };
};
