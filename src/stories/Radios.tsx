import React from 'react';
import styled from '@emotion/styled';
import { InlineWrapper } from '@/components/atoms';
import { RadioButton } from '@/components/molecules';
import { RadioButtonGroup } from '@/components/organisms';

const StyledLabel = styled.label`
  color: #a2a2a2;
  font-size: 12px;
  font-weight: 400;
  margin-right: 20px;
  width: 80px;
`;

const StyledSpacing = styled.div`
  padding: 15px;
`;

const Radios = () => {
  return (
    <>
      <InlineWrapper>
        <StyledLabel>On</StyledLabel>
        <RadioButton label="Normal" hasEvent={false} isOnSelected />
        <RadioButton
          label="Hover"
          hasEvent={false}
          isOnSelected
          isOnHover
        />
        <RadioButton
          label="Disable"
          hasEvent={false}
          isOnSelected
          isDisabled
        />
      </InlineWrapper>
      <StyledSpacing />
      <InlineWrapper>
        <StyledLabel>Off</StyledLabel>
        <RadioButton label="Normal" hasEvent={false} />
        <RadioButton label="Hover" hasEvent={false} isOnHover />
        <RadioButton label="Disable" hasEvent={false} isDisabled />
      </InlineWrapper>
      <StyledSpacing />
      <InlineWrapper>
        <StyledLabel>Group Active</StyledLabel>
        <RadioButtonGroup />
      </InlineWrapper>
    </>
  );
};

export default Radios;
