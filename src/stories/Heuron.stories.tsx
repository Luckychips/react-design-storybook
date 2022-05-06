import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubmitButton, SearchButton } from './Buttons';

export default {
  title: 'Heuron/Button',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const SubmitHandler : ComponentStory<typeof SubmitButton> = (args) => <SubmitButton />;
const SearchHandler : ComponentStory<typeof SearchButton> = (args) => <SearchButton />;

export const Submit = SubmitHandler.bind({});
Submit.args = {};

export const Search = SearchHandler.bind({});
Search.args = {};
