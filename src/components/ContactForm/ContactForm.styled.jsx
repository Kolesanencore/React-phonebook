import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 300px;
  padding: 5px 5px;
  background-color: #007bff;
  color: #fff;
  border: 2px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Card = styled.div`
  background-color: #3c303025;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Descr = styled.h2`
  margin-top: 20px;
  color: #1010107e;
  font-size: 12px;
`;
