import Image from "next/image";
import { FC } from "react";

import BlueBtn from "@/components/common/buttons/blueBtn/BlueBtn";
import questions from "@images/questions.png";

import {
  LoadingDescription,
  LoadingQuiestion,
  QuestionContent,
  QuestionImage,
  QuestionsWrapper,
} from "./Questions.styles";
import { AppModals } from "@/constants/common";
import { LoadingButton } from "@/styles/common";

interface Props {
  modalHandler: (modalID: number) => void;
  loading?: boolean;
}

const Questions: FC<Props> = ({ modalHandler, loading = false }) => {
  const orderCallHandler = () => {
    modalHandler(AppModals.Call);
  };
  const askQuestionHandler = () => {
    modalHandler(AppModals.Question);
  };
  return (
    <QuestionsWrapper>
      <QuestionImage loading={loading}>
        {!loading && (
          <Image src={questions} alt={"questions"} width={118} height={126} />
        )}
      </QuestionImage>
      <QuestionContent>
        {!loading && (
          <>
            <p>Есть вопрос?</p>
            <p>Мы с удовольствием ответим на все!</p>
            <BlueBtn
              height={"32"}
              color={"dark"}
              label={"Заказать звонок"}
              clickHandler={orderCallHandler}
            />
            <BlueBtn
              height={"32"}
              color={"light"}
              label={"Задать вопрос"}
              clickHandler={askQuestionHandler}
            />
          </>
        )}
        {loading && (
          <>
            <LoadingQuiestion />
            <LoadingDescription />
            <LoadingButton height={30} />
            <LoadingButton height={30} />
          </>
        )}
      </QuestionContent>
    </QuestionsWrapper>
  );
};

export default Questions;
