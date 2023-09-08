import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 10px;
  border-radius: 6px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => (props.isOperator ? "#72b9f8" : "black")};

  &:hover {
    background-color: #baccdb;
  }

  &:active {
    transform: scale(0.99);
  }
`;
