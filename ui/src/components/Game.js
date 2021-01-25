import React, { Fragment, useState } from 'react';
import { JokeDisplayer } from './JokeDisplayer';
import { JokeTypeDisplayer } from './JokeTypeDisplayer';
import { Block, Container } from './common'


export const Game = (props) => {
    const [counter, setCounter] = useState(0);
    const [display, setDisplay] = useState(false)
    const [score, setScore] = useState([]);

    const incrementCounter = () => {
        setCounter(counter + 1);
        setDisplay(false)
        setTimeout(() => {
            setDisplay(true)
        }, 1000)
    }


    const onSave = (levelScore) => {
        const arr = [...score, levelScore]
        setScore(arr)
    }

    const average = (nums) => {
        return nums.length > 0 ? nums.reduce((a, b) => (a + b)) / nums.length : 0;
    }

    return <Container>
        <Block height={'5rem'} />
        <Block height={'2rem'}>
            Current Page - {counter}
        </Block>
        <Block height={'1rem'}>
            Culmulative Score : {average(score)}
        </Block>
        <Container height={'70vh'} marginTop={'2rem'}>
            {
                counter === 0
                &&
                <Block>
                    <button onClick={incrementCounter}>Start Game</button>
                </Block>
            }
            {
                counter !== 0 && counter < 10
                &&
                <Fragment>
                    {
                        display
                        && <JokeContainer onSave={onSave} />
                    }
                    <Block>
                        <button onClick={incrementCounter}>Next</button>
                    </Block>
                </Fragment>
            }
        </Container>
    </Container>
}

const JokeContainer = (props) => {

    const [jokeType, setJokeType] = useState(null)

    return <Fragment>
        <JokeTypeDisplayer jokeType={jokeType} setJokeType={setJokeType} />
        {
            jokeType &&
            <JokeDisplayer jokeType={jokeType} onSave={props.onSave} />
        }
    </Fragment>
}