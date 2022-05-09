import { ButtonType } from '@/variables/ui';

export interface ButtonProps {
  buttonType: ButtonType;
  buttonState?: string;
  label?: string;
  isRound?: boolean;
}
