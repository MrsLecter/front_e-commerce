import { ChangeEvent, useState } from "react";
import { FC } from "react";
import styled from "styled-components";

interface ITextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  inputValue: string;
  isRequired?: boolean;
  autofocus?: boolean;
  onChangeHandler: (text: string) => void;
}

const TextArea: FC<ITextAreaProps> = ({
  placeholder,
  inputValue,
  isRequired,
  autofocus,
  onChangeHandler,
  ...defaultProps
}) => {
  const [currentText, setCurrentText] = useState<string>("");
  const textChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentText(e.target.value);
    onChangeHandler(currentText);
  };
  return (
    <StyledTextArea
      value={currentText}
      onChange={(e) => textChangeHandler(e)}
      placeholder={placeholder}
      required={isRequired}
      autoFocus={autofocus}
      {...defaultProps}
    ></StyledTextArea>
  );
};

const StyledTextArea = styled.textarea`
  padding: 12px;
  width: 100%;
  height: 124px;
  font-family: var(--font-roboto);
  font-weight: 400;
  font-size: 14px;
  color: #909090;
  opacity: 0.7;
  border-radius: 2px;
  border: 1px solid #c4c8cc;
  background-color: white;
  resize: none;

  @media (max-width: 360px) {
    margin: 0 auto;
    width: calc(100% - 16px);
  }
`;

export default TextArea;
