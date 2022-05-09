import React from 'react';
import { FormInput, Separator } from '@/components/atoms';

interface StorybookInputProps {
  test: string;
}

const Input = (props: StorybookInputProps) => {
  return (
    <>
      <FormInput />
      <Separator />
      <FormInput />
      <Separator />
      <FormInput />
      <Separator />
    </>
  );
};

export default Input;
