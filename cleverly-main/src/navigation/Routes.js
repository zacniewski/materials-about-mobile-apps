import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { colors } from '../styles';

import { AuthContext } from './AuthProvider';
import AuthStack from './auth-stack';
import HomeStack from './home-stack';

DefaultTheme.colors.background = colors.ADDITIONAL_COLORS.COMMON.WHITE;

export default function Routes() {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(newUser) {
    setUser(newUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
