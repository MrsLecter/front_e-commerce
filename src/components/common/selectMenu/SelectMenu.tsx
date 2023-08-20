import { ChangeEvent, FC } from "react";

import { StyledSelectMenu } from "./SelectMenu.styles";

interface Props {
  defaultOption: string;
  selectedValue: string;
  setValue: (value: string) => void;
  optionsArray: string[];
}

const SelectMenu: FC<Props> = ({
  defaultOption,
  optionsArray=[],
  selectedValue = "",
  setValue,
}) => {

  return (
    <StyledSelectMenu>
      <select
        onChange={(e) => setValue(e.target.value)}
        disabled={!selectedValue.length && !optionsArray.length}
      >
        <option value={defaultOption} disabled selected={!selectedValue.length}>
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((item, index) => {
            return (
              <option
                key={index}
                value={item}
                selected={selectedValue === item}
              >
                {item}
              </option>
            );
          })}
      </select>
    </StyledSelectMenu>
  );
};

export default SelectMenu;
