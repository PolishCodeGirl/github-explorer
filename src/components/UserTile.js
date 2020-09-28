import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Div from 'styled-kit/Div';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  stars: PropTypes.number.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

const defaultProps = {
  description: ''
}

const UserTile = ({ title, description, stars, repoUrl }) => (
  <Wrapper mTop={5} justifyBetween>
    <Div column itemsStart>
      <TitleLink href={repoUrl} target='_blank' rel="noopener noreferrer">{title}</TitleLink>
      <Description>{description}</Description>
    </Div>
    <Star>{`${stars} ★`}</Star>
  </Wrapper>
);

UserTile.propTypes = propTypes;
UserTile.defaultProps = defaultProps;

export default UserTile;

const Wrapper = styled(Div)`
  padding: 15px 5px;
  background-color: #e0e0e0;

  margin-left: 15px;
`;

const TitleLink = styled.a`
  font-weight: bold;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #009de0;
  }
`

const Star = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  flex: none;
`

const Description = styled.p`
  font-size: 14px;
`;