import Image from "next/image";
import { FC } from "react";

import doneSVG from "@icons/done.svg";

import BlueBtn from "../../../buttons/BlueBtn/BlueBtn";
import { FeedbackModalContent } from "./FeedbackModal.styles";
import Link from "next/link";

interface Props {
  closeModalHandler: () => void;
}

const SuccessContent: FC<Props> = ({ closeModalHandler }) => {
  return (
    <FeedbackModalContent>
      <Link href={'/'}><Image src={doneSVG} width={40} height={40} alt={"done.svg"} /></Link>
      <p>Запрос отправлен, скоро с Вами свяжутся</p>
      <div>
        <BlueBtn
          label={"Закрыть"}
          clickHandler={closeModalHandler}
          color={"dark"}
        />
      </div>
    </FeedbackModalContent>
  );
};

export default SuccessContent;
