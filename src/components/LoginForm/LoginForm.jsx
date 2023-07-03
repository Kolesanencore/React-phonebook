import { useDispatch } from 'react-redux';

import { logIn } from 'Redux/auth/operations';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Form } from '../RegisterForm/RegisterForm.styled';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff3cc',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        name="email"
        required={true}
        label="Email"
        variant="outlined"
        margin="normal"
        sx={{ width: '300px' }}
      />
      <TextField
        name="password"
        required={true}
        type="password"
        label="Password"
        variant="outlined"
        margin="normal"
        sx={{ width: '300px' }}
      />
      <ThemeProvider theme={theme}>
        <Button type="submit" variant="outlined">
          Log in
        </Button>
      </ThemeProvider>
    </Form>
  );
};
