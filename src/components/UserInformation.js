import React, { useState } from "react";
import styled from "styled-components";

import Div from "styled-kit/Div";
import HeightTransition from "styled-kit/HeightTransition";

const UserInformation = ({ userName, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Div column mTop={10} onClick={handleClick}>
      <Wrapper>
        <Title>{userName}</Title>
        <Arrow isRotated={isOpen}>▼</Arrow>
      </Wrapper>
      <HeightTransition isActive={isOpen}>{children}</HeightTransition>
    </Div>
  );
};

export default UserInformation;

const Wrapper = styled(Div)`
  background-color: lightgray;
`;

const Title = styled.p`
  margin: 0;
  font-size: 16px;
`;

const Arrow = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;

  transform: ${({ isRotated }) => (isRotated ? "rotate(180deg)" : "none")};
  transition: transform 400ms;
`;
