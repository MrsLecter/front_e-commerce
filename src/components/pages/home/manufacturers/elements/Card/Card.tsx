import Image from "next/image";
import { FC } from "react";

import { StyledCard } from "./Card.styles";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/constants/common";

interface Props {
  id: number;
  logo: string;
  rim: string;
  href: string;
}

const Card: FC<Props> = (props) => {
  const router = useRouter();
  const goToManufacturersRims = () => {
    router.push(AppRoutes.Rims + props.href);
  };
  return (
    <StyledCard>
      <div>
        <div>
          <Image src={props.logo} alt={"logo.png"} width={130} height={28} />
        </div>
        <button onClick={goToManufacturersRims}>Посмотреть все</button>
      </div>

      <div>
        <Image src={props.rim} alt={"rim.png"} width={184} height={152} />
      </div>
    </StyledCard>
  );
};

export default Card;
