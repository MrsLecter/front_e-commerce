import { ChangeEvent, FC, MouseEvent, useState } from "react";
import styled from "styled-components";

interface Props {
  name: string;
  label: string;
  setDiameter: (selectedDiameter: string) => void;
}

const Checkbox: FC<Props> = ({ name, label, setDiameter }) => {
  const [check, setCheck] = useState<boolean>(false);

  const toggleCheckbox = (e: ChangeEvent) => {
    setDiameter((e.currentTarget as HTMLInputElement).value);
    setCheck(!check);
    console.log("click ", (e.currentTarget as HTMLInputElement).value);
  };

  return (
    <StyledCheckbox>
      <StyledInput
        type="checkbox"
        name={"checkbox-" + name}
        id={"checkbox-" + name}
        value={label}
        onChange={(e) => toggleCheckbox(e)}
        checked={check}
      />
      <StyledLabel htmlFor={"checkbox-" + name}>{label}</StyledLabel>
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div`
  margin: 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  /* -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none; */
  width: 14px;
  height: 14px;
  accent-color: #517399;
  border: 2px solid #517399;
  border-radius: 2px;
  margin-right: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLabel = styled.label`
  width: 100%;
  font-family: var(--font-roboto);
  font-size: 12px;
  color: #333;

  &:hover {
    cursor: pointer;
  }
`;

export default Checkbox;
