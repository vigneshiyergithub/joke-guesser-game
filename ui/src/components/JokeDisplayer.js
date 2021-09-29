import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import stringSimilarity from "string-similarity";
import { Container, Block } from "./common";
import {JokeTextContent} from './Game'
const JokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${(props) => (props.marginHorizontal ? "30%" : "0")};
  margin-right: ${(props) => (props.marginHorizontal ? "30%" : "0")};
`;

const EmptyBlock = styled.div`
  height: 5rem;
`;

const Input = styled.input``;
const jokeURL = "https://sv443.net/jokeapi/v2/joke/";

export const JokeDisplayer = (props) => {
  const [firstPartJoke, setFirstPartJoke] = useState("");
  const [secondPartJoke, setSecondPartJoke] = useState("");

  useEffect(() => {
    fetch(jokeURL + `${props.jokeType}?type=twopart`)
      .then((data) => data.json())
      .then(({ setup, delivery }) => {
        if (setup && delivery) {
          setFirstPartJoke(setup);
          setSecondPartJoke(delivery);
        }
      });
  }, []);

  return (
    <JokeContainer marginHorizontal={true}>
      <FirstPartJoke joke={firstPartJoke} />
      <EmptyBlock />
      <JokeGuesser joke={secondPartJoke} onSave={props.onSave} />
    </JokeContainer>
  );
};

const FirstPartJoke = (props) => {
  return <div>Premise : {props.joke}</div>;
};

const JokeGuesser = (props) => {
  const [text, setText] = useState("");
  const [score, setScore] = useState(null);
  const [showSection, setShowSection] = useState(false);
  useEffect(() => {
    setScore(stringSimilarity.compareTwoStrings(text, props.joke));
  }, [text, props.joke]);

  const buttonClick = (e) => {
    setShowSection(true);
    props.onSave(score);
  };

  const style = {
    // width: "20rem",
    // marginRight: "2rem",
  };
  return (
    <JokeTextContent.Consumer>
      {( value ) => (
        <Container>
          <Block
            justifyContent={"space-between"}
            height={'5rem'}
            // paddingLeft="2rem"
            // paddingRight="2rem"
            // flexDirection="column"
          >
            <Input
              value={text}
              style={style}
              onChange={(e) => {
                setText(e.target.value);
                value(e.target.value);
              }}
              type="text"
            />
            <button onClick={buttonClick} disabled={showSection}>Check</button>
          </Block>
          {showSection && (
            <Container height={'5rem'} marginTop="1rem" textAlign="left"> 
              <Block>Score : {score}</Block>
              <Block>Actual Answer : {props.joke}</Block>
            </Container>
          )}
        </Container>
      )}
    </JokeTextContent.Consumer>
  );
};
