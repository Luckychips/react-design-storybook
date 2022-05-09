import React from 'react';
import styled from '@emotion/styled';
import { BUTTON_TYPE } from '@/variables/ui';
import { Separator, Submit } from '@/components/atoms';

interface StorybookButtonProps {
  buttonState?: string;
  label?: string;
  isRound?: boolean;
}

const StyledInlineFigure = styled.figure`
  display: inline-grid;
`;

const Button = (props: StorybookButtonProps) => {
  return (
    <>
      <StyledInlineFigure>
        <Submit {...props} buttonType={BUTTON_TYPE.TYPE1} />
        <Separator />
        <Submit {...props} buttonType={BUTTON_TYPE.TYPE2} />
        <Separator />
        <Submit {...props} buttonType={BUTTON_TYPE.TYPE3} />
        <Separator />
        <Submit {...props} buttonType={BUTTON_TYPE.TYPE4} />
      </StyledInlineFigure>
      <StyledInlineFigure>
        <Submit {...props} buttonType={BUTTON_TYPE.TYPE5} />
        <Separator />
        <Submit {...props} buttonType={BUTTON_TYPE.TYPE6} />
        <Separator />
      </StyledInlineFigure>
    </>
  );
};

export default Button;
