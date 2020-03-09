import styled from "styled-components";

export const ListToggleButton = styled.button`
  background: ${({ dataList }) => (dataList ? "#f1f1f1" : "white")};
  color: black;
  box-shadow: 3px 3px 4px #d7d7d7;

  width: 80px;
  height: 30px;
  cursor: ${({ dataList }) => (dataList ? "initial" : "pointer")};

  outline: none;
  border: none;

  &:hover {
    box-shadow: 3px 2px 3px #d7d7d7;
  }

  &:active {
    box-shadow: 3px 2px 1px #d7d7d7;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: auto;
  justify-content: center;

  & button:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  & button:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
