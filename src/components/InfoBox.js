import React from 'react';
import styled from 'styled-components';

import Div from 'styled-kit/Div';

const InfoBox = ({ message }) => (
    <Wrapper justifyCenter mTop={5}>
        <p>{message}</p>
    </Wrapper>
);

export default InfoBox;

const Wrapper = styled(Div)`
    width: 100%;
    box-sizing: border-box;   
    border: 2px solid lightblue;

    border-radius: 2px;
    font-size: 16px;

    padding: 15px;
`