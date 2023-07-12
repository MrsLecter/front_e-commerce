import { FC } from "react";
import questions from "@images/questions.png";
import Image from "next/image";
import BlueBtn from "@/components/common/buttons/BlueBtn";
import { QuestionContent, QuestionsWrapper } from "./Questions.styles";

const Questions: FC = () => {
  const orderCall = () => {
    alert("order call");
  };
  const askQuestion = () => {
    alert("ask Question");
  };
  return (
    <QuestionsWrapper>
      <QuestionContent>
        <div>
          <Image src={questions} alt={"questions"} width={110} height={118} />
        </div>
        <div>
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
        </div>
      </QuestionContent>
    </QuestionsWrapper>
  );
};

export default Questions;
