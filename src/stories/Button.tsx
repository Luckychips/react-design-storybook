import React from 'react';
import { ButtonProps } from '@/models/styled';
import { Separator, Submit } from '@/components/atoms';

const Button = (props: ButtonProps) => {
  return (
    <>
      <Submit {...props} />
      <Separator />
      <Submit {...props} />
      <Separator />
      <Submit {...props} />
    </>
  );
};

export default Button;
