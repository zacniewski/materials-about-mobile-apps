import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoarding from '../../views/auth/onboarding';
import LoginScreen from '../../views/auth/login';
import SignupScreen from '../../views/auth/signup';

import { SCREENS } from '../constants';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.AUTH.SIGN_UP.ID}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.AUTH.ONBOARDING.ID} component={OnBoarding} />
      <Stack.Screen name={SCREENS.AUTH.SIGN_UP.ID} component={SignupScreen} />
      <Stack.Screen name={SCREENS.AUTH.LOGIN.ID} component={LoginScreen} />
    </Stack.Navigator>
  );
}
