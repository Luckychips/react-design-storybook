import React from 'react';
import styled from '@emotion/styled';
import { InlineWrapper } from '@/components/atoms';
import { CheckBox } from '@/components/molecules';

const StyledLabel = styled.label`
  color: #a2a2a2;
  font-size: 12px;
  font-weight: 400;
  margin-right: 20px;
  width: 20px;
`;

const StyledSpacing = styled.div`
  padding: 15px;
`;

const Checker = () => {
  return (
    <>
      <InlineWrapper>
        <StyledLabel>On</StyledLabel>
        <CheckBox label="Normal" isCheckedFromPassed />
        <CheckBox label="Hover" isCheckedFromPassed isOnHover />
        <CheckBox label="Disable" isCheckedFromPassed isDisabled />
      </InlineWrapper>
      <StyledSpacing />
      <InlineWrapper>
        <StyledLabel>Off</StyledLabel>
        <CheckBox label="Normal" />
        <CheckBox label="Hover" isOnHover />
        <CheckBox label="Disable" isDisabled />
      </InlineWrapper>
      <StyledSpacing />
      <InlineWrapper>
        <StyledLabel>Active</StyledLabel>
        <CheckBox label="CheckBox" />
      </InlineWrapper>
    </>
  );
};

export default Checker;
