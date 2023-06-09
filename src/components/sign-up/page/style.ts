import styled from "@emotion/styled";

export const SignUpPageLayout = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #fff;
  margin: 0 auto;
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const GoBackButton = styled.div<{ section: number }>`
  margin-left: 4.5px;
  width: 19px;
  height: 19px;
  border-left: 3px solid #000;
  border-top: 3px solid #000;
  rotate: -45deg;
  margin-bottom: 5rem;
  cursor: pointer;
  pointer-events: ${(e) => e.section === 1 && "none"};
`;

export const Title = styled.h1`
  padding: 0 4px;
  font-size: 1.7em;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;
