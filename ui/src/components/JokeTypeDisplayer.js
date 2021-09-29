import React from 'react';
import { Container, Block } from './common'

export const JokeTypeDisplayer = (props) => {
    
    const handleChange = (e) => {
        props.setJokeType(e.target.value)
    }

    return <Block marginHorizontal paddingLeft={'30%'} paddingRight={'30%'}>
            <select value={props.jokeType} onChange={handleChange} disabled={!!props.jokeType} >
                <option>Please Select</option>
                <option value="Any">Any</option>
                <option value="Programming">Programming</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Dark">Dark</option>
                <option value="Pun">Pun</option>
            </select>
        </Block>
}