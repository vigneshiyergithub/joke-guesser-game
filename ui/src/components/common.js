import styled from 'styled-components'

export const Container = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    height : ${props => props.height ? props.height : 'inherit'};
    margin-top: ${props => props.marginTop ? props.marginTop : 'inherit'};

`

export const Block = styled.div`
    display : flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    height : ${props => props.height ? props.height : 'fit-content'}
`
