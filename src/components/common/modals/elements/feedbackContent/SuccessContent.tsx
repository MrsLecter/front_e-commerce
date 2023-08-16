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
      <div>
        <Image src={doneSVG} width={40} height={40} alt={"done.svg"} />
        <p>Запрос отправлен, скоро с Вами свяжутся</p>
        <div>
          <BlueBtn
            id="close"
            label={"Закрыть"}
            clickHandler={closeModalHandler}
            color={"dark"}
          />
        </div>
      </div>
    </FeedbackModalContent>
  );
};

export default SuccessContent;
