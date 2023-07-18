import Image from "next/image";
import { FC } from "react";

import BlueBtn from "@/components/common/buttons/BlueBtn/BlueBtn";
import questions from "@images/questions.png";

import {
  QuestionContent,
  QuestionImage,
  QuestionsWrapper,
} from "./Questions.styles";

const Questions: FC = () => {
  const orderCall = () => {
    alert("order call");
  };
  const askQuestion = () => {
    alert("ask Question");
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
            clickHandler={orderCall}
          />
          <BlueBtn
            color={"light"}
            label={"Задать вопрос"}
            clickHandler={askQuestion}
          />
      </QuestionContent>
    </QuestionsWrapper>
  );
};

export default Questions;
