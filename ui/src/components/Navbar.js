import React from "react";
import styled from "styled-components";

const Block = styled.div`
  background-color: black;
  color: white;
  text-align: left;
  padding-left: 3rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

export default function Navbar(props) {
  return <Block>Joke Guesser Game</Block>;
}
