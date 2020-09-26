import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from 'styled-kit/Div';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  stars: PropTypes.number.isRequired,
};

const defaultProps = {
  description: ''
}

const UserTile = ({ title, description, stars }) => (
  <Wrapper mTop={5} justifyBetween>
    <Div column itemsStart width="90%">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Div>
    <Title style={{ fontSize: 14 }}>{`${stars} ★`}</Title>
  </Wrapper>
);

UserTile.propTypes = propTypes;
UserTile.defaultProps = defaultProps;

export default UserTile;

const Wrapper = styled(Div)`
  padding: 15px 5px;
  background-color: gray;

  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.p`
  font-weight: bold;
`

const Description = styled.p`
  font-size: 14px;
`;