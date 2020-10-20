import React from 'react';
import styled from 'styled-components';

const JokeContainer = styled.div`
    display : flex;
    flex-direction: column;
`;

export const JokeDisplayer = (props) => {
    return <JokeContainer>
        <FirstPartJoke />
        <JokeGuesser />
    </JokeContainer>
}

const FirstPartJoke = (props) => {
    return <div>
        First FirstPartJoke
        </div>
}

const JokeGuesser = (props) => {
    return <div>
            Joke JokeGuesser
        </div>
}