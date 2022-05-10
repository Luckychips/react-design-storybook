import React from 'react';
import { ComponentStory } from '@storybook/react';
import Checker from './Checker';

export default {
  title: 'H - Design System/Molecules/Checker',
  component: Checker,
};

const PageTemplate: ComponentStory<typeof Checker> = (args) => <Checker />;
export const OnOff = PageTemplate.bind({});
