import React from 'react';
import { ComponentStory } from '@storybook/react';
import Switches from './Switches';

export default {
  title: 'H - Design System/Molecules/Switch',
  component: Switches,
  argTypes: {
    isActive: {
      control: 'boolean',
    },
  },
};

const PageTemplate: ComponentStory<typeof Switches> = (args) => (
  <Switches {...args} />
);
export const OnOffSwitching = PageTemplate.bind({});
OnOffSwitching.args = {
  isActive: true,
};
