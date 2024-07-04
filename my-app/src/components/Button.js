import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: rgb(210, 239, 255);
  color: #434343;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  box-sizing: border-box;
  border-style: none;
  border-radius: 5px;
  min-width: 50px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: rgb(178, 228, 255);
    box-shadow: 3px 3px 5px -2px #a9e1ff;
  }
`;

const Button = ({ text, onClick }) => {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
};

export default Button;
