import React from 'react';
import { Switch } from '@/components/molecules';

interface StorybookSwitchProps {
  isActive: boolean;
}

const Switches = (props: StorybookSwitchProps) => {
  return <Switch {...props} />;
};

export default Switches;
