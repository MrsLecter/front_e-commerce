import Image from "next/image";
import { FC } from "react";

import errorSVG from "@icons/error.svg";

import { FeedbackModalContent } from "./FeedbackModal.styles";
import BlueBtn from "@/components/common/buttons/blueBtn/BlueBtn";

interface Props {
  closeModalHandler: () => void;
  color?: "grey" | "white";
}

const ErrorContent: FC<Props> = ({ closeModalHandler, color = "grey" }) => {
  return (
    <FeedbackModalContent color={color}>
      <Image src={errorSVG} width={40} height={40} alt={"done.svg"} />
      <p>Произошла ошибка!</p>
      <div>
        <BlueBtn
          id="close"
          label={"Закрыть"}
          clickHandler={closeModalHandler}
          color={"dark"}
        />
      </div>
    </FeedbackModalContent>
  );
};

export default ErrorContent;
