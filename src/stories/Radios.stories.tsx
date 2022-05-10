import React from 'react';
import { ComponentStory } from '@storybook/react';
import Radios from './Radios';

export default {
  title: 'H - Design System/Molecules/Radios',
  component: Radios,
};

const PageTemplate: ComponentStory<typeof Radios> = (args) => <Radios />;
export const Select = PageTemplate.bind({});
