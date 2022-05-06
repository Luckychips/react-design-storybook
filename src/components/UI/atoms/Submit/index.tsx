import React from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from '@/models/styled';

const StyledButton = styled.div`
  width: 205px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #34c2dc;
  border-radius: 50px;
  font-weight: 700;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }

  &.hover {
    background-color: #82dbed;
  }

  &.active {
    background-color: #22a7c2;
  }

  &.disabled {
    color: rgba(255, 255, 255, 0.5);
    background-color: #263238;
  }
`;

const Submit = ({ buttonType, label = 'Submit' }: ButtonProps) => {
  return <StyledButton className={buttonType}>{label}</StyledButton>;
};

export default Submit;
