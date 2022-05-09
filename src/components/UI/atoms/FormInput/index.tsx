import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.section`
  position: relative;
`;

const StyledPlaceholder = styled.div`
  position: absolute;
  top: 12px;
  left: 17px;
  font-size: 14px;
  color: #999999;
  transition-property: top, font;
  transition-duration: 0.2s, 0.2s;

  &.has-focus {
    top: 3px;
    font-size: 10px;
    color: #26b7d5;
  }

  &.has-error {
    color: #ff8a8a;
  }
`;

const StyledInput = styled.input`
  max-height: 40px;
  padding: 10px 0 10px 16px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;

  &:not(.has-error) {
    &:hover {
      border: 1px solid #555 !important;
    }

    &:focus {
      outline: none;
      border: 1px solid #26b7d5 !important;
    }
  }

  &.has-error {
    outline: none;
    border: 1px solid #ff8a8a !important;
  }
`;

const FormInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [value, setValue] = useState('');

  const onChange = (text: string) => {
    setValue(text);
    setHasError(false);
    if (text.length > 10) {
      setHasError(true);
    }
  };

  const onFocus = () => {
    setIsOnFocus(true);
  };

  const onBlur = () => {
    if (!value.length) {
      setIsOnFocus(false);
    }
  };

  const updateFocusClassName = () => {
    return isOnFocus ? 'has-focus' : '';
  };

  const updateErrorClassName = () => {
    return hasError ? 'has-error' : '';
  };

  return (
    <StyledWrapper>
      <StyledPlaceholder
        className={`${updateFocusClassName()} ${updateErrorClassName()}`}
      >
        placeholder
      </StyledPlaceholder>
      <StyledInput
        ref={inputRef}
        type="text"
        value={value}
        className={`${updateErrorClassName()}`}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </StyledWrapper>
  );
};

export default FormInput;
