import React from 'react';
import styled from '@emotion/styled';
import { StyledComponentProps } from '@/types/global';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InlineWrapper = ({ className, children }: StyledComponentProps) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default InlineWrapper;
