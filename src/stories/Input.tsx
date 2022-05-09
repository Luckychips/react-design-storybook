import React from 'react';
import { FormInput, Separator } from '@/components/atoms';
import { THEME_SIZE } from '@/variables/ui';

interface StorybookInputProps {
  isDisabled: boolean;
  themeSize: THEME_SIZE;
}

const Input = (props: StorybookInputProps) => {
  return (
    <>
      <FormInput {...props} />
      <Separator />
      <FormInput {...props} />
    </>
  );
};

export default Input;
