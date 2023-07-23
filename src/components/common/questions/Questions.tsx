import Image from "next/image";
import { FC } from "react";

import BlueBtn from "@/components/common/buttons/BlueBtn/BlueBtn";
import questions from "@images/questions.png";

import {
  QuestionContent,
  QuestionImage,
  QuestionsWrapper,
} from "./Questions.styles";
import { AppModals } from "@/constants/common";

interface Props {
  modalHandler: (modalID: number) => void;
}

const Questions: FC<Props> = ({ modalHandler }) => {
  const orderCallHandler = () => {
    modalHandler(AppModals.Call);
  };
  const askQuestionHandler = () => {
    modalHandler(AppModals.Question);
  };
  return (
    <QuestionsWrapper>
      <QuestionImage>
        <Image src={questions} alt={"questions"} width={118} height={126} />
      </QuestionImage>
      <QuestionContent>
        <p>Есть вопрос?</p>
        <p>Мы с удовольствием ответим на все!</p>
        <BlueBtn
          color={"dark"}
          label={"Заказать звонок"}
          clickHandler={orderCallHandler}
        />
        <BlueBtn
          color={"light"}
          label={"Задать вопрос"}
          clickHandler={askQuestionHandler}
        />
      </QuestionContent>
    </QuestionsWrapper>
  );
};

export default Questions;
