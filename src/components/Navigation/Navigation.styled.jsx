import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;

  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    transform: scale(1.02);
  }

  &.active {
    text-transform: uppercase;
    text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
      -1px 1px 0 black;
  }
`;
