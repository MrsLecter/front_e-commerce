import { FC, MouseEvent, useState } from "react";
import ModalHeader from "../elements/ModalHeader";
import ModalContent from "../elements/ModalContent";
import Input from "../../input/Input";
import BlueBtn from "../../buttons/BlueBtn/BlueBtn";
import { useInput } from "@/hooks/use-input";
import { EMAIL_REGEXP, PHONE_REGEXP } from "@/utils/regexp";
import { StyledQuestionModal } from "./QuestionModal.styles";
import ModalWrapper from "../../wrappers/modalWrapper/ModalWrapper";
import TextArea from "../../textArea/TextArea";

interface Props {
  isAppearing: boolean;
  closeModalHandler: () => void;
}

const QuestionModal: FC<Props> = ({ isAppearing, closeModalHandler }) => {
  const [text, setText] = useState<string>("");

  const {
    value: email,
    error: emailIsValid,
    changeHandler: emailChangeHandler,
  } = useInput({
    regexp: EMAIL_REGEXP,
    allowEmpty: false,
  });

  const {
    value: phone,
    error: phoneIsValid,
    changeHandler: phoneChangeHandler,
  } = useInput({
    regexp: PHONE_REGEXP,
    allowEmpty: true,
    maskType: "phone",
    mask: "+380(099)-250-75-69",
  });

  const askQuestionHandler = () => {
    console.log("email: ", email, "phone: ", phone, "text: ", text);
    if (email && !emailIsValid) {
      alert("Error: Email is not valid!");
    }
    if (phone && !phoneIsValid) {
      alert("Error: Phone number is not valid!");
    }
    if (!text) {
      alert("Error: Text is empty!");
    }

    if ((phoneIsValid || phone) && (emailIsValid || email) && text) {
      alert("send " + phone + email + text);
    }
  };

  const windowClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalWrapper backClickHandler={closeModalHandler} isActive={isAppearing}>
      <StyledQuestionModal onClick={windowClickHandler}>
        <ModalHeader label={"Обратная связь"} />
        <ModalContent>
          <TextArea
            placeholder={"Напишите Ваш вопрос"}
            inputValue={text}
            isRequired={false}
            onChangeHandler={setText}
          />
          <Input
            type={"email"}
            placeholder={"Ваш email (необязательно)"}
            inputValue={email}
            isRequired={false}
            onChangeHandler={emailChangeHandler}
          />
          <Input
            type={"tel"}
            placeholder={"Ваш номер телефона"}
            inputValue={phone}
            isRequired={true}
            maxLen={18}
            onChangeHandler={phoneChangeHandler}
          />

          <div>
            <BlueBtn
              color={"dark"}
              label={"Задать вопрос"}
              clickHandler={askQuestionHandler}
            />
          </div>
        </ModalContent>
      </StyledQuestionModal>
    </ModalWrapper>
  );
};

export default QuestionModal;
