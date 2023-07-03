import { StyledLink, NavList } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavList>
        <li>
          <StyledLink to="/register">SignUp</StyledLink>
        </li>
        <li>
          <StyledLink to="/login">LogIn</StyledLink>
        </li>
      </NavList>
    </div>
  );
};
