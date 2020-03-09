import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;

export const StyledButton = styled.button`
  width: 70px;
  height: 35px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: white;
  box-shadow: 0px 3px 4px #d7d7d7;
  color: black;
  user-select: none;

  &:hover {
    box-shadow: 0px 2px 3px #d7d7d7;
  }

  &:active {
    box-shadow: 0px 2px 1px #d7d7d7;
  }
`;
