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
        <CheckBox label="Normal" hasEvent={false} isCheckedFromPassed />
        <CheckBox
          label="Hover"
          hasEvent={false}
          isCheckedFromPassed
          isOnHover
        />
        <CheckBox
          label="Disable"
          hasEvent={false}
          isCheckedFromPassed
          isDisabled
        />
      </InlineWrapper>
      <StyledSpacing />
      <InlineWrapper>
        <StyledLabel>Off</StyledLabel>
        <CheckBox label="Normal" hasEvent={false} />
        <CheckBox label="Hover" hasEvent={false} isOnHover />
        <CheckBox label="Disable" hasEvent={false} isDisabled />
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
