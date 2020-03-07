import styled from "styled-components";

export const ItemHeader = styled.h1`
  background: black;
  color: white;
  height: 50px;
  margin: auto;
  position: relative;
  border-radius: 10px;
  padding: 10px 40px;

  & a {
    color: white;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: gray;
    }
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
    padding: 5px 0;
  }

  & i {
    // border: 1px solid black;
  }
`;
