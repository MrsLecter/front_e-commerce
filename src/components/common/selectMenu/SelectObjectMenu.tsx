import { FC } from "react";

import { StyledSelectMenu } from "./SelectMenu.styles";

interface Props {
  defaultOption: number;
  setValue: (id: number) => void;
  optionsObject: { [id: number]: string };
}

const SelectObjectMenu: FC<Props> = ({
  defaultOption,
  optionsObject,
  setValue,
}) => {
  return (
    <StyledSelectMenu type={"large"}>
      <select onChange={(e) => setValue(+e.target.value)}>
        {/* <option value={defaultOption} disabled>
          {optionsObject[defaultOption]}
        </option> */}
        {optionsObject &&
          Object.entries(optionsObject).map((item, index) => {
            return (
              <option key={index} value={index}>
                {item[1]}
              </option>
            );
          })}
      </select>
    </StyledSelectMenu>
  );
};

export default SelectObjectMenu;
