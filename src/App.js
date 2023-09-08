import { Input } from "./components/Input/";
import { Button } from "./components/Button";
import { Container, Content, ButtonsGrid } from "./styles";
import React, { useState } from "react";

const App = () => {
  /* handling input and result */
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  /* function to evaluate the expressions -> avoiding the use of eval */
  const evaluateExpression = (input) => {
    try {
      const operators = ["+", "-", "*", "/"];

      /* keep track of the numbers that need to be processed when operators are encountered */
      const numStack = [];

      /* used to store operators encountered in the input */
      const opStack = [];

      /* a temporary storage for building numeric values */
      let numBuffer = "";

      const performOperation = () => {
        const operand2 = parseFloat(numStack.pop());
        const operand1 = parseFloat(numStack.pop());
        const operator = opStack.pop();

        switch (operator) {
          case "+":
            numStack.push(operand1 + operand2);
            break;
          case "-":
            numStack.push(operand1 - operand2);
            break;
          case "*":
            numStack.push(operand1 * operand2);
            break;
          case "/":
            numStack.push(operand1 / operand2);
            break;
          default:
            break;
        }
      };

      /* loop through each character in the input */
      for (let i = 0; i < input.length; i++) {
        const char = input[i];

        /* if the character is a number or decimal point, add it to numBuffer */
        if (!isNaN(char) || char === ".") {
          numBuffer += char;
        } else if (operators.includes(char)) {
          /* If the character is an operator, push numBuffer to numStack */
          numStack.push(numBuffer);
          numBuffer = "";

          /* perform operations based on operator precedence */
          while (
            opStack.length > 0 &&
            operators.indexOf(opStack[opStack.length - 1]) >=
              operators.indexOf(char)
          ) {
            performOperation();
          }
          /* push the current operator to opStack */
          opStack.push(char);
        }
      }
      /* if the character is an operator, push numBuffer to numStack */
      numStack.push(numBuffer);

      /* perform remaining operations */
      while (opStack.length > 0) {
        performOperation();
      }

      /* the result is the only item left in numStack */
      return numStack[0];
    } catch (error) {
      return "Error";
    }
  };

  /* function to handle button clicks */
  const handleButtonClick = (value) => {
    if (value === "AC") {
      /* clear the input and result */
      setInput("");
      setResult(0);
    } else if (value === "DEL") {
      /* handle deletion of characters */
      setInput((prevInput) => {
        if (prevInput.length === 1) {
          return "0";
        } else {
          return prevInput.slice(0, -1);
        }
      });
    } else if (value === "=") {
      /* evaluate the expression and set the result */
      const newResult = evaluateExpression(input);
      setResult(newResult);
      setInput(newResult.toString());
    } else {
      /* add the button value to the input */
      if (input === "0") {
        setInput(value);
      } else {
        setInput((prevInput) => prevInput + value);
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={input || result} />
        <ButtonsGrid>
          <Button value="AC" isOperator onClick={handleButtonClick} />
          <Button value="DEL" isOperator onClick={handleButtonClick} />
          <Button value="%" isOperator onClick={handleButtonClick} />
          <Button value="/" isOperator onClick={handleButtonClick} />

          <Button value="7" onClick={handleButtonClick} />
          <Button value="8" onClick={handleButtonClick} />
          <Button value="9" onClick={handleButtonClick} />
          <Button value="*" isOperator onClick={handleButtonClick} />

          <Button value="4" onClick={handleButtonClick} />
          <Button value="5" onClick={handleButtonClick} />
          <Button value="6" onClick={handleButtonClick} />
          <Button value="-" isOperator onClick={handleButtonClick} />

          <Button value="1" onClick={handleButtonClick} />
          <Button value="2" onClick={handleButtonClick} />
          <Button value="3" onClick={handleButtonClick} />
          <Button value="+" isOperator onClick={handleButtonClick} />

          <Button value="0" onClick={handleButtonClick} />
          <Button value="00" onClick={handleButtonClick} />
          <Button value="." onClick={handleButtonClick} />
          <Button value="=" isOperator onClick={handleButtonClick} />
        </ButtonsGrid>
      </Content>
    </Container>
  );
};

export default App;
