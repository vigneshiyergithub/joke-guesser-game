import styled from 'styled-components'

export const Container = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    height : ${props => props.height ? props.height : 'inherit'};
    margin-top: ${props => props.marginTop ? props.marginTop : 'inherit'};
    border : ${props => props.border ? "1px solid" : "none"};
    margin-left: ${props => props.marginHorizontal ? "10%" : "0"};
    margin-right: ${props => props.marginHorizontal ? "10%" : "0"};
    padding-left: ${props => props?.paddingLeft ?? "0"};
    padding-right: ${props => props?.paddingRight ?? "0"};
    text-align: ${props => props?.textAlign ?? "center"};

`

export const Block = styled.div`
    display : flex;
    flex-direction: ${props => props?.flexDirection ?? "column"};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    height : ${props => props.height ? props.height : 'fit-content'};
    margin-top: ${props => props.marginTop ? props.marginTop : 'inherit'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : 'inherit'};
    padding-left: ${props => props?.paddingLeft ?? "0"};
    padding-right: ${props => props?.paddingRight ?? "0"};

`

export const Col = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 20%;
    padding-right: 20%;
`