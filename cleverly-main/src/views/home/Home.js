import React, { useContext } from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import { FormattedMessage } from 'react-intl';

import { AuthContext } from '../../navigation/AuthProvider';

export default function HomeView() {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text>
        <FormattedMessage defaultMessage={'Hello'} id={'hello'} />
      </Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
}
