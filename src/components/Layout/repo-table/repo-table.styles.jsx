import styled from "styled-components";

export const GithubTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;

export const GithubTable = styled.table`
  table-layout: fixed;
  background: white;
  box-shadow: 0px 3px 6px #d7d7d7;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border-collapse: collapse;

  & tbody tr {
    &:hover {
      background: #f1f1f1;
    }
  }

  & td {
    width: 20%;
    padding: 6px 10px;
    text-align: center;
  }

  & th {
    padding: 5px 0;
  }

  & th::after {
    content: "";
    padding-top: 10px;
    margin-bottom: 0px;
    display: block;
    border-bottom: 1px solid #d7d7d7;
  }

  & th:first-child::after {
    content: "";
    width: 80%;
    margin-inline-start: auto;
  }
  & th:last-child::after {
    content: "";
    width: 80%;
    margin-inline-end: auto;
  }
`;
