import { BUTTON_TYPE, THEME_SIZE } from '@/variables/ui';

export interface KeyValue {
  key: number;
  value: string;
}

export interface ButtonProps {
  buttonType: BUTTON_TYPE;
  buttonState?: string;
  label?: string;
  isRound?: boolean;
}

export interface InputProps {
  isDisabled?: boolean;
  themeSize: THEME_SIZE;
}

export interface CheckBoxProps {
  label: string;
  isCheckedFromPassed?: boolean;
  isDisabled?: boolean;
  isOnHover?: boolean;
  hasEvent?: boolean; // 컴포넌트 테스트를 위해 모든 이벤트를 제거
}

export interface RadioButtonProps {
  label: string;
  isOnSelected?: boolean;
  isDisabled?: boolean;
  isOnHover?: boolean;
  hasEvent?: boolean; // 컴포넌트 테스트를 위해 모든 이벤트를 제거
  item?: KeyValue;
  onSelect?: (obj: KeyValue) => void;
}

export interface SwitchProps {
  isActive: boolean;
}
