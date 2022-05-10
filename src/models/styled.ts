import { BUTTON_TYPE, THEME_SIZE } from '@/variables/ui';

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
  hasEvent?: boolean;
}
