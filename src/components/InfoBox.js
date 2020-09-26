import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from 'styled-kit/Div';

const propTypes = {
    message: PropTypes.string.isRequired
}

const InfoBox = ({ message, props }) => (
    <Wrapper justifyCenter mTop={5} {...props}>
        <p>{message}</p>
    </Wrapper>
);

InfoBox.propTypes = propTypes;

export default InfoBox;

const Wrapper = styled(Div)`
    width: 100%;
    box-sizing: border-box;   
    border: 2px solid lightblue;

    border-radius: 2px;
    font-size: 16px;

    padding: 15px;
`