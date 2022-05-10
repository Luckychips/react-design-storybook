import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { CheckBoxProps } from '@/models/styled';
import { icons } from '@/assets';

const StyledCheckBoxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;

    & > .has-event:not(.disabled) {
      &.on {
        border: 1px solid #82dbed;
        background-color: #82dbed;
      }

      &.off {
        border: 1px solid #34c2dc;
      }
    }
  }
`;

const StyledChecker = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 2px;

  &.on {
    border: 1px solid #34c2dc;
    background-color: #34c2dc;

    &.is-on-hover {
      border: 1px solid #82dbed;
      background-color: #82dbed;
    }

    &.disabled {
      border: 1px solid #eee;
      background-color: #eee;
    }
  }

  &.off {
    border: 1px solid #555;

    &.is-on-hover {
      border: 1px solid #34c2dc;
    }

    &.disabled {
      border: 1px solid #999;
      background-color: #c4c4c4;
    }
  }

  & > img {
    position: absolute;
    left: 1px;
    top: 2px;
  }
`;

const StyledLabel = styled.label`
  color: #111;
  font-weight: 400;
  font-size: 12px;
  margin: 0 15px 0 2.5px;

  &:hover {
    cursor: pointer;
  }
`;

const CheckBox = ({
  label,
  isCheckedFromPassed = false,
  isDisabled = false,
  isOnHover = false,
  hasEvent = true,
}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const onClick = () => {
    if (!isDisabled && hasEvent) {
      setIsChecked(!isChecked);
    }
  };

  const getHasEvent = () => {
    return hasEvent ? 'has-event' : '';
  };

  const getChecked = () => {
    return isChecked ? 'on' : 'off';
  };

  const getDisabled = () => {
    return isDisabled ? 'disabled' : '';
  };

  const getOnHover = () => {
    return isOnHover ? 'is-on-hover' : '';
  };

  useEffect(() => {
    setIsChecked(isCheckedFromPassed);
  }, [isCheckedFromPassed]);

  return (
    <StyledCheckBoxWrapper onClick={onClick}>
      <StyledChecker
        className={`${getHasEvent()} ${getChecked()} ${getDisabled()} ${getOnHover()}`}
      >
        {isChecked && <img src={icons.ic_checked} alt="" />}
      </StyledChecker>
      <StyledLabel>{label}</StyledLabel>
    </StyledCheckBoxWrapper>
  );
};

export default CheckBox;
