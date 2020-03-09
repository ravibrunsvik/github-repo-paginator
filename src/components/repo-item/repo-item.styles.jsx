import styled from "styled-components";

export const ItemHeader = styled.h1`
  height: 50px;
  margin: 5px 0;
  position: relative;
  border-radius: 10px;
  padding: 10px 40px;
  box-shadow: 0px 3px 6px #d7d7d7;
  & a {
    color: black;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: gray;
    }
  }
`;

export const TableLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;

export const CreatorImage = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 40px;
`;

export const DescriptionParagraph = styled.p`
  width: 80%;
  padding: 0 40px;
`;

export const DetailsList = styled.ul`
  list-style: none;

  & li {
    display: inline-block;

    padding: 5px 10px;
  }
`;
