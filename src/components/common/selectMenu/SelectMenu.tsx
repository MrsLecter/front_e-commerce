import { ChangeEvent, FC } from "react";

import { StyledSelectMenu } from "./SelectMenu.styles";

interface Props {
  defaultOption: string;
  setValue: (value: string) => void;
  optionsArray: string[];
}

const SelectMenu: FC<Props> = ({ defaultOption, optionsArray, setValue }) => {
  return (
    <StyledSelectMenu>
      <select
        onChange={(e) => setValue(e.target.value)}
        disabled={!optionsArray || optionsArray.length === 0}
      >
        <option value={defaultOption}>{defaultOption}</option>
        {optionsArray &&
          optionsArray.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
      </select>
    </StyledSelectMenu>
  );
};

export default SelectMenu;
