import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/redux';
import { useAuth } from './hooks/useAuth';
import { AppRouter } from './router/AppRouter';
import { setLoading } from './store/slices/loadingSlice';
import { removeUser, setUser } from './store/slices/userSlice';

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const dispatch = useAppDispatch();

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    dispatch(setLoading(true));
    if (user) {
      const id = user.uid;
      const email = user.email;
      const token = user.refreshToken;
      dispatch(
        setUser({
          email,
          id,
          token,
        }),
      );
      dispatch(setLoading(false));
    } else {
      console.log('user is sign out');
      dispatch(setLoading(false));
    }
  });

  // useEffect(() => {
  //   if (loggedIn != undefined) {
  //     //do loggedIn stuff
  //   }
  // }, [loggedIn]);
  return <AppRouter />;
}

export default App;
