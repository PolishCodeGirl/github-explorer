import React from "react";
import styled from "styled-components";

import Div from "styled-kit/Div";

const UserTile = ({ title, description, stars }) => (
  <Wrapper mTop={5} justifyBetween>
    <Div column itemsStart>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Div>
    <Title style={{ fontSize: 14 }}>{`${stars} ★`}</Title>
  </Wrapper>
);

export default UserTile;

const Wrapper = styled(Div)`
  padding: 15px 5px;
  background-color: gray;

  width: 100%;

  p {
    margin: 0;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
`

const Description = styled.p`
  font-size: 14px;
`;