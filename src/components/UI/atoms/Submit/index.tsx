import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from '@emotion/styled';
import { ButtonProps } from '@/models/styled';

const StyledButton = styled.div`
  width: 205px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  font-weight: 700;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
  
  &.button-is-round {
   border-radius: 50px !important; 
  }

  &.type1-normal {
    color: white;
    background-color: #34c2dc;
    border: 1px solid #34c2dc;
  }

  &.type1-hover {
    color: white;
    background-color: #82dbed;
    border: 1px solid #82dbed;
  }

  &.type1-active {
    color: white;
    background-color: #22a7c2;
    border: 1px solid #22a7c2;
  }

  &.type1-disabled {
    color: rgba(255, 255, 255, 0.5);
    background-color: #263238;
    border: 1px solid #263238;
  }
  
  &.type2-normal {
    color: white;
    background-color: #33383c;
    border: 1px solid #33383c; 
  }
  
  &.type2-hover {
    color: #82dbed;
    background-color: #333333;
    border: 1px solid #333333;
  }
  
  &.type2-active {
    color: white;
    background-color: #111111;
    border: 1px solid #111111;
  }
  
  &.type2-disabled {
    color: white;
    opacity: 0.5;
    background-color: #111111;
    border: 1px solid #111111;
  }
  
  &.type3-normal {
    color: white;
    border: 1px solid #eeeeee;
  }
  
  &.type3-hover {
    color: #111111;
    background-color: #fafafa;
    border: 1px solid #fafafa;
  }
  
  &.type3-active {
    color: #111111;
    background-color: #e0e0e0;
    border: 1px solid #e0e0e0;
  }
  
  &.type3-disabled {
    color: #222222;
    border: 1px solid #222222;
  }
  
  &.type4-normal {
    color: #34c2dc;
    border: 1px solid #34c2dc;
  }
  
  &.type4-hover {
    color: white;
    background-color: #82dbed;
    border: 1px solid #82dbed;
  }
  
  &.type4-active {
    color: white;
    background-color: #22a7c2;
    border: 1px solid #22a7c2;
  }
  
  &.type4-disabled {
    color: #263238; 
    border: 1px solid #263238;
  }
  
  &.type5-normal {
    color: #ffbaba;
    border: 1px solid #ffbaba;
  }
  
  &.type5-hover {
    color: #ffc4cb;
    border: 1px solid #ffc4cb;
  }
  
  &.type5-active {
    color: #f45a5e;
    border: 1px solid #f45a5e;
  }
  
  &.type5-disabled {
    color: #263238;
    border: 1px solid #263238;
  }
  
  &.type6-normal {
    color: #6ed671;
    border: 1px solid #6ed671;
  }
  
  &.type6-hover {
    color: #c4edc3;
    border: 1px solid #c4edc3;
  }
  
  &.type6-active {
    color: #44cc4f;
    border: 1px solid #44cc4f;
  }
  
  &.type6-disabled {
    color: #263238;
    border: 1px solid #263238;
  }
`;

const Submit = ({
  buttonType,
  buttonState = 'normal',
  label = 'Submit',
  isRound = true,
}: ButtonProps) => {
  const getButtonState = () => {
    return buttonState ? `-${buttonState}` : '';
  };

  const getButtonRoundOption = () => {
    return isRound ? 'button-is-round' : '';
  };

  return (
    <StyledButton
      className={`${buttonType}${getButtonState()} ${getButtonRoundOption()}`}
      onClick={action('clicked!')}
    >
      {label}
    </StyledButton>
  );
};

export default Submit;
