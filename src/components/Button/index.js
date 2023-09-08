import { ButtonContainer } from "./styles";

export const Button = ({ value, isOperator, onClick }) => {
  return (
    <ButtonContainer isOperator={isOperator} onClick={() => onClick(value)}>
      {value}
    </ButtonContainer>
  );
};

export default Button;
