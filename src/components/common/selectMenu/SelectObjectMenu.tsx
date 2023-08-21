import { FC } from "react";

import { StyledSelectMenu } from "./SelectMenu.styles";

interface Props {
  defaultOption: number;
  setValue: (id: number) => void;
  optionsObject: { [id: number]: string };
  clickHandler: ()=>void;
}

const SelectObjectMenu: FC<Props> = ({
  defaultOption,
  optionsObject,
  setValue,
  clickHandler
}) => {
  return (
    <StyledSelectMenu type={"large"} onClick={clickHandler}>
      <select onChange={(e) => setValue(+e.target.value)}>
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
