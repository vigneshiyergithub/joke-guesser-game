import React, { Fragment, useEffect, useState } from "react";
import { JokeDisplayer } from "./JokeDisplayer";
import { JokeTypeDisplayer } from "./JokeTypeDisplayer";
import { Block, Container, Col } from "./common";

export const JokeTextContent = React.createContext();
const GAME_PAGE_LIMIT = 10;
export const Game = (props) => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(false);
  const [score, setScore] = useState([]);
  const [jokeText, setJokeText] = useState("");
  const incrementCounter = () => {
    setCounter(counter + 1);
    setDisplay(false);
    setTimeout(() => {
      setDisplay(true);
    }, 1000);
  };

  const resetState = () => {
    setCounter(0);
    setScore([]);
  };

  const onSave = (levelScore) => {
    const arr = [...score, levelScore];
    setScore(arr);
  };

  const average = (nums) => {
    return nums.length > 0 ? nums.reduce((a, b) => a + b) / nums.length : 0;
  };

  return (
    <Container>
      <Block height={"5rem"} />
      <Col>
        <Block height={"1rem"}>
          Game Page <br /> {counter}/{GAME_PAGE_LIMIT}
        </Block>
        <Block height={"1rem"}>Total Score <br/> {average(score)}</Block>
      </Col>
      <Container
        height={"70vh"}
        marginTop={"2rem"}
        border
        marginHorizontal
        noHeight
      >
        {counter === 0 && (
          <Block marginTop={"2rem"} paddingLeft={"30%"} paddingRight={"30%"}>
            <button onClick={incrementCounter}>Start Game</button>
          </Block>
        )}
        {counter !== 0 && counter < GAME_PAGE_LIMIT && (
          <Fragment>
            {display && (
              <JokeTextContent.Provider value={setJokeText}>
                <JokeContainer onSave={onSave} />
              </JokeTextContent.Provider>
            )}
            <Block
              marginBottom={"2rem"}
              paddingLeft={"30%"}
              paddingRight={"30%"}
            >
              <button disabled={!jokeText} onClick={incrementCounter}>
                Next
              </button>
            </Block>
          </Fragment>
        )}
        {counter === GAME_PAGE_LIMIT && (
          <Container
            height="5rem"
            marginTop="2rem"
            paddingLeft="30%"
            paddingRight="30%"
            textAlign="left"
          >
            <Block>Total Score - {average(score)}</Block>
            <Block>
              <button onClick={resetState}>New Game</button>
            </Block>
          </Container>
        )}
      </Container>
    </Container>
  );
};

const JokeContainer = (props) => {
  const [jokeType, setJokeType] = useState(null);
  return (
    <Fragment>
      <JokeTypeDisplayer jokeType={jokeType} setJokeType={setJokeType} />
      {jokeType && <JokeDisplayer jokeType={jokeType} onSave={props.onSave} />}
    </Fragment>
  );
};
