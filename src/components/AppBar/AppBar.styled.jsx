import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, #bf3989, #096bde);
  box-shadow: 0 2px 8px rgba(255, 107, 1, 0), inset 0 1px hsla(0, 0%, 100%, 0.3),
    inset 0 10px hsla(0, 0%, 100%, 0.2),
    inset 0 10px 20px hsla(0, 0%, 100%, 0.25),
    inset 0 -15px 30px rgba(255, 107, 1, 0.3);
  font-size: 15px;

  margin-bottom: 20px;
  padding: 15px;
  border-radius: 5px;
`;
