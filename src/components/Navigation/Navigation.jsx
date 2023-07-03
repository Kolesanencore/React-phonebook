import { NavList } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from '../../hooks/useAuth';

import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavList>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </NavList>
    </nav>
  );
};
