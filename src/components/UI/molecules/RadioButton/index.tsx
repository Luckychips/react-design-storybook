import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { RadioButtonProps } from '@/models/styled';

const StyledRadioButtonWrapper = styled.div`
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

const StyledActionButton = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 10px;

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
`;

const StyledRadioInnerCircle = styled.div`
  position: absolute;
  left: 4px;
  top: 4px;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background-color: white;
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

const RadioButton = ({
  label,
  isOnSelected = false,
  isDisabled = false,
  isOnHover = false,
  hasEvent = true,
  item,
  onSelect,
}: RadioButtonProps) => {
  const onClick = () => {
    if (!isDisabled && hasEvent) {
      if (item && onSelect) {
        onSelect(item);
      }
    }
  };

  const getHasEvent = () => {
    return hasEvent ? 'has-event' : '';
  };

  const getChecked = () => {
    return isOnSelected ? 'on' : 'off';
  };

  const getDisabled = () => {
    return isDisabled ? 'disabled' : '';
  };

  const getOnHover = () => {
    return isOnHover ? 'is-on-hover' : '';
  };

  return (
    <StyledRadioButtonWrapper onClick={onClick}>
      <StyledActionButton
        className={`${getHasEvent()} ${getChecked()} ${getDisabled()} ${getOnHover()}`}
      >
        {isOnSelected && <StyledRadioInnerCircle />}
      </StyledActionButton>
      <StyledLabel>{label}</StyledLabel>
    </StyledRadioButtonWrapper>
  );
};

export default RadioButton;
