import Image from "next/image";
import { FC } from "react";

import { StyledCard } from "./Card.styles";

interface Props {
  id: number;
  logo: string;
  rim: string;
  href: string;
}

const Card: FC<Props> = (props) => {
  return (
    <StyledCard>
      <div>
        <div>
          <Image src={props.logo} alt={"logo.png"} width={130} height={28} />
        </div>
        <button>Посмотреть все</button>
      </div>

      <div>
        <Image src={props.rim} alt={"rim.png"} width={184} height={152} />
      </div>
    </StyledCard>
  );
};

export default Card;
