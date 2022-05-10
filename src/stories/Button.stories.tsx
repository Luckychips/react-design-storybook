import React from 'react';
import { ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'H - Design System/Atoms/Button',
  component: Button,
  argTypes: {
    buttonState: {
      options: ['normal', 'hover', 'active', 'disabled'],
      control: 'radio',
    },
    isRound: {
      control: 'boolean',
    },
  },
};

const PageTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
export const AsType = PageTemplate.bind({});
AsType.args = {
  buttonState: 'normal',
  label: 'Submit',
  isRound: true,
};
