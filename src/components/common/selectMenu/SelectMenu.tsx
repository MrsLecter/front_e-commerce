import { FC } from "react";

import { StyledSelectMenu } from "./SelectMenu.styles";

interface Props {
  defaultOption: string;
  setValue: (value: string) => void;
  optionsArray: { id: number; label: string }[];
}

const SelectMenu: FC<Props> = ({ defaultOption, optionsArray, setValue }) => {
  return (
    <StyledSelectMenu>
      <select onChange={(e) => setValue(e.target.value)}>
        <option value={defaultOption}>{defaultOption}</option>
        {optionsArray.map((item) => {
          return (
            <option key={item.id} value={item.label}>
              {item.label}
            </option>
          );
        })}
      </select>
    </StyledSelectMenu>
  );
};

export default SelectMenu;
