import Image from "next/image";
import { FC } from "react";

import doneSVG from "@icons/done.svg";

import BlueBtn from "@/components/common/buttons/blueBtn/BlueBtn";
import { FeedbackModalContent } from "./FeedbackModal.styles";

interface Props {
  closeModalHandler: () => void;
  color?:"grey" | "white";
}

const SuccessContent: FC<Props> = ({ closeModalHandler, color="grey" }) => {
  return (
    <FeedbackModalContent color={color}>
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
