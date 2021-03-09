import React, { useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../../components/button';
import TextField from '../../../components/text-field';

import { AuthContext } from '../../../navigation/AuthProvider';
import IconButton from '../../../components/icon-button';
import GoBackIcon from '../../../assets/svg/icons/Go-back.svg';

import { schema } from './validationSchema';
import { styles } from './Signup.styles';

export default function SignupScreen({ navigation }) {
  const { register } = useContext(AuthContext);

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit({ email, password }) {
    try {
      register(email, password);
    } catch (e) {}
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.actionContainer}>
          <IconButton onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </IconButton>
        </View>
        <View>
          <Text style={styles.title}>Sign Up Now</Text>
          <Text style={styles.subTitle}>
            Please provide us with this information in order to create an
            account.
          </Text>
        </View>
        <View>
          <Controller
            name={'email'}
            control={control}
            defaultValue={''}
            render={({ onChange, onBlur, value }) => (
              <TextField
                autoCapitalize={'none'}
                label={'Email Address'}
                value={value}
                onBlur={onBlur}
                onChangeText={(newValue) => onChange(newValue)}
                error={errors.email}
              />
            )}
          />
          <Controller
            name={'password'}
            control={control}
            defaultValue={''}
            autoCapitalize={'none'}
            render={({ onChange, onBlur, value }) => (
              <TextField
                secureTextEntry={true}
                label={'Password'}
                value={value}
                onBlur={onBlur}
                onChangeText={(newValue) => onChange(newValue)}
                error={errors.password}
              />
            )}
          />
          <Controller
            name={'confirmPassword'}
            control={control}
            defaultValue={''}
            autoCapitalize={'none'}
            render={({ onChange, onBlur, value }) => (
              <TextField
                autoCompleteType="off"
                secureTextEntry={true}
                label={'Confirm Password'}
                value={value}
                onBlur={onBlur}
                onChangeText={(newValue) => onChange(newValue)}
                error={errors.confirmPassword}
              />
            )}
          />
        </View>
        <Button
          label={'Create Account'}
          isChevronDisplayed={true}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </SafeAreaView>
  );
}
