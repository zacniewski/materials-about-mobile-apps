import React, { useContext } from 'react';
import { Text, Button, SafeAreaView } from 'react-native';

import { AuthContext } from '../../../navigation/AuthProvider';

// @TODO Implement login screen. Mocked login
export default function LoginScreen() {
  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <Button
        title={'login'}
        onPress={() => login('email@lh.lh', 'password')}
      />
    </SafeAreaView>
  );
}
