import { FC } from "react";
import { IInputProps } from "./Input.type";
import { StyledInput } from "./Input.styles";

const Input: FC<IInputProps> = (props) => {
  const {
    type,
    placeholder = "",
    inputValue = "",
    isRequired = true,
    autofocus = false,
    maxLen = 300,
    onChangeHandler,
    ...defaultProps
  } = props;
  return (
    <StyledInput
      value={inputValue ? inputValue : ""}
      onChange={(event) => onChangeHandler(event)}
      type={type}
      placeholder={placeholder}
      name={type}
      required={isRequired}
      maxLength={maxLen}
      autoFocus={autofocus}
      {...defaultProps}
    />
  );
};

export default Input;
