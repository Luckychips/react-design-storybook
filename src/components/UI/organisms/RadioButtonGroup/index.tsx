import React, { useState } from 'react';
import { InlineWrapper } from '@/components/atoms';
import { RadioButton } from '@/components/molecules';
import { KeyValue } from '@/models/styled';

const list = [
  {
    key: 1,
    value: 'test1',
  },
  {
    key: 2,
    value: 'test2',
  },
  {
    key: 3,
    value: 'test3',
  },
];

const RadioButtonGroup = () => {
  const [buttonItem, setButtonItem] = useState<KeyValue>(list[0]);

  return (
    <InlineWrapper>
      {list.map((obj, i) => (
        <RadioButton
          key={`radio-button-key-${i}`}
          label={obj.value}
          item={obj}
          isOnSelected={buttonItem.key === obj.key}
          onSelect={(target: KeyValue) => setButtonItem(target)}
        />
      ))}
    </InlineWrapper>
  );
};

export default RadioButtonGroup;
