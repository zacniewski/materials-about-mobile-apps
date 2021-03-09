import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {}
}

export async function setItem(key, value = '') {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {}
}

export async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {}
}
