import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e3eb;
`;

export const Content = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  border-radius: 12px;
  padding: 10px 20px 20px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
`;

export const ButtonsGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`;
