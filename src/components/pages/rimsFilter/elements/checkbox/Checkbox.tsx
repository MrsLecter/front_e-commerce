import { FC, MouseEvent } from "react";
import styled from "styled-components";

interface Props {
  name: string;
  label: string;
  setDiameter: (diameter: string) => void;
}

const Checkbox: FC<Props> = ({ name, label, setDiameter }) => {
  const toggleCheckbox = (e: MouseEvent) => {
    console.log((e.currentTarget as HTMLInputElement).value);
    setDiameter((e.currentTarget as HTMLInputElement).value);
  };

  return (
    <StyledCheckbox>
      <StyledInput
        type="checkbox"
        name={name}
        value={label}
        onClick={(e) => toggleCheckbox(e)}
      />
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
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
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  width: 14px;
  height: 14px;
  accent-color: #517399;
  border: 2px solid #517399;
  border-radius: 2px;
  margin-right: 4px;
`;

const StyledLabel = styled.label`
  font-family: var(--font-roboto);
  font-size: 12px;
  color: #333;
`;

export default Checkbox;
