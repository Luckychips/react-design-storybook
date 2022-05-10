import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { InputProps } from '@/models/styled';
import { THEME_SIZE } from '@/variables/ui';

const StyledWrapper = styled.section`
  position: relative;

  &.sm {
    input {
      font-size: 12px;
    }
  }

  &.md {
    input {
      font-size: 14px;
    }
  }

  &.lg {
    input {
      font-size: 14px;
    }
  }
`;

const StyledPlaceholder = styled.div`
  position: absolute;
  top: 12px;
  left: 17px;
  color: #999999;
  transition-property: top, font;
  transition-duration: 0.2s, 0.2s;

  &.is-disabled {
    color: #999999;

    &:hover {
      cursor: not-allowed;
    }
  }

  &:not(.is-disabled) {
    &.has-focus {
      top: 3px;
      font-size: 8px;
      color: #26b7d5;
    }

    &.has-error {
      color: #ff8a8a;
    }
  }
`;

const StyledInput = styled.input`
  max-height: 40px;
  padding: 14px 0 6px 16px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;

  &.is-disabled {
    outline: none;
    background-color: #eeeeee;

    &:hover {
      cursor: not-allowed;
    }
  }

  &:not(.is-disabled) {
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
  }
`;

const FormInput = ({
  isDisabled = false,
  themeSize = THEME_SIZE.SMALL,
}: InputProps) => {
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
    inputRef.current!.focus();
    setIsOnFocus(true);
  };

  const onBlur = () => {
    if (!value.length) {
      setIsOnFocus(false);
    }
  };

  const getThemeSize = () => {
    let size = 'sm';
    switch (themeSize) {
      case THEME_SIZE.SMALL:
        size = 'sm';
        break;
      case THEME_SIZE.MEDIUM:
        size = 'md';
        break;
      case THEME_SIZE.LARGE:
        size = 'lg';
        break;
    }

    return size;
  };

  const updateDisableClassName = () => {
    return isDisabled ? 'is-disabled' : '';
  };

  const updateFocusClassName = () => {
    return isOnFocus ? 'has-focus' : '';
  };

  const updateErrorClassName = () => {
    return hasError ? 'has-error' : '';
  };

  return (
    <StyledWrapper className={`${getThemeSize()}`}>
      <StyledPlaceholder
        className={`${updateDisableClassName()} ${updateFocusClassName()} ${updateErrorClassName()}`}
        onClick={onFocus}
      >
        placeholder
      </StyledPlaceholder>
      <StyledInput
        ref={inputRef}
        type="text"
        value={value}
        className={`${updateDisableClassName()} ${updateErrorClassName()}`}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </StyledWrapper>
  );
};

export default FormInput;
