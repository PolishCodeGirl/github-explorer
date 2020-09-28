import styled from 'styled-components';

const Arrow = styled.span`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  position: relative;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 12px;
    height: 2px;
    position: absolute;
    top: 12px;
    background: black;
    border-radius: 2px;
  }

  &::before {
    right: 8px;
    transform: rotate(45deg);
  }
  &::after {
    left: 12px;
    transform: rotate(-45deg);
  }

  transform: ${({ isRotated }) => (isRotated ? 'rotate(180deg)' : 'none')};
  transition: transform 400ms;
`;

export default Arrow;
