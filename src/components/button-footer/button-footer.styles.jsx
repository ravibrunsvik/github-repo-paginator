import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 10px;
  text-transform: uppercase;
  box-shadow: 2px 4px 13px grey, -2px 0 13px grey;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  background: black;
  color: white;

  &:hover {
    background: #ccc;
  }
`;
