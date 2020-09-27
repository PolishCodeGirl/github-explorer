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
    border: 2px solid #009de0;

    border-radius: 2px;

    padding: 15px;
`