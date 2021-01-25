import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import stringSimilarity from 'string-similarity';
import { Container, Block } from './common'

const JokeContainer = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: space-between;
`;

const EmptyBlock = styled.div`
    height : 5rem;
`

const Input = styled.input`

`
const jokeURL = 'https://sv443.net/jokeapi/v2/joke/'

export const JokeDisplayer = (props) => {
    const [firstPartJoke , setFirstPartJoke] = useState('')
    const [secondPartJoke , setSecondPartJoke] = useState('')

    useEffect(() => {
        fetch(jokeURL + `${props.jokeType}?type=twopart`).then((data) => data.json())
            .then(({setup, delivery}) => {
                if(setup && delivery) {
                    setFirstPartJoke(setup)
                    setSecondPartJoke(delivery)
                }
            })
    }, [])

    return <JokeContainer>
        <FirstPartJoke joke={firstPartJoke} />
        <EmptyBlock/>
        <JokeGuesser joke={secondPartJoke} onSave={props.onSave}/>
    </JokeContainer>
}

const FirstPartJoke = (props) => {
    return <div>
        Premise : {props.joke}
        </div>
}

const JokeGuesser = (props) => {
    const [text, setText] = useState('');
    const [score, setScore] = useState(0);
    const [showSection, setShowSection] = useState(false)
    useEffect(() => {
        setScore(stringSimilarity.compareTwoStrings(text, props.joke));
    }, [text, props.joke])

    const buttonClick = (e) => {
        setShowSection(true);
        props.onSave(score)
    }

    const style = {
        width: '20rem',
        marginRight: '2rem'
    }

    return <Container>
            <Block justifyContent={'space-between'}>
                <Input value={text} style={style} onChange={e => setText(e.target.value)} type="text"/>
                <button onClick={buttonClick}>Check</button>
            </Block>
            {
                showSection && 
                <Fragment>
                    <Block>
                        Score : {score}
                    </Block>
                    <Block>
                        Actual Answer : {props.joke}
                    </Block>
                </Fragment>
            }
        </Container>
}