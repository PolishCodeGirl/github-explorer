import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from 'styled-kit/Div';

const propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'error']),
};

const InfoBox = ({ message, type, ...props }) => (
  <Wrapper justifyCenter mTop={5} type={type} {...props}>
    <p>{message}</p>
  </Wrapper>
);

InfoBox.propTypes = propTypes;

export default InfoBox;

const Wrapper = styled(Div)`
  width: 100%;
  border: 2px solid #009de0;

  border-radius: 2px;

  padding: 15px;
  font-size: 14px;
  color: white;

  ${({ type }) => {
    if (type === 'info') {
      return `
        border: 2px solid #009de0;
        background: rgba(0, 157, 224, 0.6);
      `;
    } else if (type === 'error') {
      return `
        border: 2px solid #da0c0c;
        background: rgba(218, 12, 12, 0.6);
       `;
    }
  }}
`;
