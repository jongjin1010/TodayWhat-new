import styled from "@emotion/styled";

export const SearchInput = styled.input`
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
`;

export const ResultBox = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

export const ResultItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 5px;
  padding: 10px 12px;
  cursor: pointer;
  transition: 0.1s;
  :hover {
    background-color: #ebebeb;
  }
`;

export const Name = styled.h1`
  font-size: 1.2em;
  font-weight: 600;
`;

export const Address = styled.address`
  font-size: 1em;
  color: #bfbdbd;
`;
