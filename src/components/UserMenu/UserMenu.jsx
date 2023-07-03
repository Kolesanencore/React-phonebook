import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/authAction';

import { useAuth } from '../../hooks/useAuth';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { NameWrap, UserName } from './UserMenu.styled';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff3cc;',
    },
    secondary: {
      main: '#ffffff;',
    },
  },
});

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <NameWrap>
      <UserName>{user.email}</UserName>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleLogOut}
          size="small"
          variant="outlined"
          color="secondary"
        >
          Logout
        </Button>
      </ThemeProvider>
    </NameWrap>
  );
};
