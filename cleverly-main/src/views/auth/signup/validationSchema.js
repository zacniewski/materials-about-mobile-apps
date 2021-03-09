import { object, string, ref } from 'yup';

export const schema = object().shape({
  email: string().email().required(),
  password: string().min(6).required(),
  confirmPassword: string().oneOf(
    [ref('password'), null],
    'Passwords must match',
  ),
});
