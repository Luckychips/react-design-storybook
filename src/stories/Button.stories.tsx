import React from 'react';
import { ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    buttonType: {
      options: ['normal', 'hover', 'active', 'disabled'],
      control: { type: 'radio' },
    },
  },
};

const PageTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
export const AsType = PageTemplate.bind({});
AsType.args = {
  buttonType: 'normal',
  label: 'Submit',
};
