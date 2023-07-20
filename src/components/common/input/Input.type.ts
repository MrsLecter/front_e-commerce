import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  inputValue: string | null;
  isRequired?: boolean;
  autofocus?: boolean;
  maxLen?: number;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
