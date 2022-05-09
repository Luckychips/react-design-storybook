import React from 'react';
import styled from '@emotion/styled';
import { ButtonType } from '@/variables/ui';
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
            <Submit {...props} buttonType={ButtonType.type1} />
            <Separator />
            <Submit {...props} buttonType={ButtonType.type2} />
            <Separator />
            <Submit {...props} buttonType={ButtonType.type3} />
            <Separator />
            <Submit {...props} buttonType={ButtonType.type4} />
        </StyledInlineFigure>
        <StyledInlineFigure>
            <Submit {...props} buttonType={ButtonType.type5} />
            <Separator />
            <Submit {...props} buttonType={ButtonType.type6} />
            <Separator />
        </StyledInlineFigure>
    </>
  );
};

export default Button;
