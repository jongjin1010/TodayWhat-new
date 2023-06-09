import styled from "@emotion/styled";

export const MainPageLayout = styled.div`
  width: 500px;
  min-height: 100vh;
  background-color: #fff;
  margin: 0 auto;
  padding: 10rem 2rem 2em;
  display: flex;
  flex-direction: column;

  img {
    margin-left: -3px;
  }
`;

export const MyInformation = styled.div`
  width: 100%;
  height: 99px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 8.40533px;
  margin: 1rem 0 0 0;
  padding: 1.5rem;
  cursor: pointer;
`;

export const School = styled.address`
  font-size: 1.25em;
  font-weight: 700;
`;

export const Student = styled.p`
  color: #8e8e8e;
`;

export const MealBox = styled.div`
  margin-top: 2rem;
`;

export const LineBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Line = styled.div`
  width: 170px;
  height: 1.2px;
  background-color: #8e8e8e;
`;

export const Time = styled.p`
  color: #8e8e8e;
  text-align: center;
  font-size: 1em;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 700;
`;

export const MealItem = styled.div`
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  border-radius: 4.20267px;
  padding: 1rem;
`;

export const NotHasMeal = styled.h1`
  margin-top: 9rem;
  font-size: 1.4em;
  font-weight: 700;
  text-align: center;
`;
