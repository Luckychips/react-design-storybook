import React from 'react';
import { ComponentStory } from '@storybook/react';
import Input from './Input';
import { THEME_SIZE } from '@/variables/ui';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'H - Design System/Atoms/Input',
  component: Input,
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    themeSize: {
      options: ['SMALL', 'MEDIUM', 'LARGE'],
      control: 'radio',
    },
  },
};

const PageTemplate: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
export const PlaceholderInput = PageTemplate.bind({});
PlaceholderInput.args = {
  isDisabled: false,
  themeSize: THEME_SIZE.SMALL,
};
