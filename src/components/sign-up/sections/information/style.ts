import styled from "@emotion/styled";

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2.5rem;
`;
export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputTitle = styled.h1`
  color: #8e8e8e;
  padding: 0 2px;
`;

export const Input = styled.input`
  width: 100%;
  height: 62px;
  margin: 0 auto;
  padding: 9px 12px;
  font-weight: 400;
  font-size: 1.25em;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #f8f8f8;

  ::placeholder {
    color: #9c9a9a;
  }
`;

export const SignUpButton = styled.button`
  outline: none;
  border: none;
  background-color: #1f1f1f;
  width: 100%;
  height: 62px;
  color: #fff;
  border-radius: 10px;
  font-size: 1.15em;
  margin-top: 4rem;
`;
