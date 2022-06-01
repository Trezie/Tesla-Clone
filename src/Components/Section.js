import { getByTitle } from '@testing-library/react';
import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section( {title, description, backgroundImg, leftBtnText, rightBtnText}) {
    return (
        <Wrap bgImage ={backgroundImg}>
            <Fade left>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade buttom>
                    <ButtonGroup>
                        <LeftButton>{ leftBtnText }</LeftButton>
                        { rightBtnText &&
                            <RightButton>
                                { rightBtnText }
                            </RightButton>
                        }            
                    </ButtonGroup>
                </Fade>
                <DownButton src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-position: center;
    backgroung-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")` }
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    align-items: center; // horizontal
`
const LeftButton = styled.button`
    height: 40px;
    width: 256px;
    background-color: rgba(23, 26, 32, 0.8);
    color: white;
    font-size: 12px;
    border-radius: 10px;
    opacity: 0.85;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;

`


const RightButton = styled.button`
    height: 40px;
    width: 256px;
    background-color: white;
    color: black;
    font-size: 12px;
    border-radius: 10px;
    opacity: 0.65;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
    
`
const DownButton = styled.img`
    height: 30px;
    margin-top: 20px;
    animation: animateDown infinite 1.5s;
    //overflow-x: hidden;

`
const Buttons = styled.div`
    
`