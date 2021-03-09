import React, { useState, createContext } from 'react';
import auth from '@react-native-firebase/auth';
import PropTypes from 'prop-types';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {}
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {}
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {}
        },
        resetPassword: async (email) => {
          try {
            await auth().sendPasswordResetEmail(email);
          } catch (e) {}
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
