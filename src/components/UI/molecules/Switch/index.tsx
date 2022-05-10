import React from 'react';
import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { SwitchProps } from '@/models/styled';

const StyledSwitchWrapper = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const StyledBack = styled.div`
  width: 40px;
  height: 14px;
  background-color: #82dbed;
  opacity: 0.3;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #000000;
  margin-top: 20px;

  &.on {
    animation: fadein 1s;
   animation-fill-mode: forwards;
  }

  &.off {
    animation: fadeout 1s;
       animation-fill-mode: forwards;
  }

  @keyframes fadein {
    from {
      background-color: #999999;
      opacity: 0.2;
    }
    to {
      background-color: #82dbed;
    }
  }

  @keyframes fadeout {
    from {
      background-color: #82dbed;
    }
    to {
      background-color: #999999;
      opacity: 0.2;
    }
  }
`;

const StyledFront = styled.div`
  position: absolute;
  top: -6px;
  left: 15px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #82dbed;

  &.on {
    animation: moveRight 1s, colorOn 0.5s;
    animation-fill-mode: forwards;
  }

  &.off {
    animation: moveLeft 1s, colorOff 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes moveRight {
    from {
      left: -1px;
    }
    to {
      left: 15px;
    }
  }
  
  @keyframes colorOff {
    from {
      background-color: #82dbed; 
    }
    to {
      background-color: #999999;  
    }
  }

  @keyframes moveLeft {
    from {
      left: 15px;
    }
    to {
      left: -1px;
    }
  }
  
    @keyframes colorOn {
    from {
      background-color: #999999; 
    }
    to {
      background-color: #82dbed;  
    }
  }
`;

const Switch = ({ isActive }: SwitchProps) => {
  return (
    <StyledSwitchWrapper onClick={action('switching')}>
      <StyledBack className={isActive ? 'on' : 'off'} />
      <StyledFront className={isActive ? 'on' : 'off'} />
    </StyledSwitchWrapper>
  );
};

export default Switch;
