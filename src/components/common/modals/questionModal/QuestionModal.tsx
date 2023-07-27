import { FC, MouseEvent, useState, KeyboardEvent } from "react";
import ModalHeader from "../elements/ModalHeaderElement";
import ModalContent from "../elements/ModalContentElement";
import Input from "../../input/Input";
import BlueBtn from "../../buttons/BlueBtn/BlueBtn";
import { useInput } from "@/hooks/use-input";
import { EMAIL_REGEXP, PHONE_REGEXP } from "@/utils/regexp";
import { StyledQuestionModal } from "./QuestionModal.styles";
import ModalWrapper from "../../wrappers/modalWrapper/ModalWrapper";
import TextArea from "../../textArea/TextArea";
import SuccessContent from "../elements/feedbackContent/SuccessContent";
import ErrorContent from "../elements/feedbackContent/ErrorContent";
import { IModalProps } from "@/types/common.types";
import { AppModals } from "@/constants/common";
import modalService from "@/api/modal-service";

const QuestionModal: FC<IModalProps> = ({ managementObject }) => {
  const [text, setText] = useState<string>("");
  const [isQuestionSend, setQuestionSend] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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

  const questionHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      askQuestionHandler();
    }
  };

  const askQuestionHandler = async () => {
    if (email) {
      if (!emailIsValid) {
        alert("Ошибка: неправильный адрес почты");
      }
    }
    if ((phone && !phoneIsValid) || !phone) {
      alert("Ошибка: неправильный номер телефона");
    }
    if (!text || text.length <= 11) {
      alert("Ошибка: минимальная длина вопроса - 10 символов");
    }

    if (
      (phoneIsValid && phone && text && text.length >= 11) ||
      (phoneIsValid &&
        phone &&
        text &&
        text.length >= 11 &&
        email &&
        emailIsValid)
    ) {
      try {
        await modalService.postFeedback({
          question: text,
          email,
          phone,
        });

        setQuestionSend(true);
      } catch (err) {
        setError(true);
      }
    }
  };

  const windowClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {!managementObject.isActive(AppModals.Question) && <></>}
      {managementObject.isActive(AppModals.Question) && (
        <ModalWrapper
          backClickHandler={() => managementObject.closeHandler()}
          isAppearing={managementObject.isAppearing}
        >
          <StyledQuestionModal onClick={windowClickHandler}>
            <ModalHeader label={"Обратная связь"} />
            {!error && !isQuestionSend && (
              <>
                <ModalContent>
                  <TextArea
                    placeholder={"Напишите Ваш вопрос"}
                    inputValue={text}
                    isRequired={false}
                    onChangeHandler={setText}
                    autofocus={true}
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
                    onKeyDown={(e) => questionHandler(e)}
                  />

                  <div>
                    <BlueBtn
                      color={"dark"}
                      label={"Задать вопрос"}
                      clickHandler={askQuestionHandler}
                    />
                  </div>
                </ModalContent>
              </>
            )}
            {!error && isQuestionSend && (
              <SuccessContent
                closeModalHandler={() => managementObject.closeHandler()}
              />
            )}
            {error && (
              <ErrorContent
                closeModalHandler={() => managementObject.closeHandler()}
              />
            )}
          </StyledQuestionModal>
        </ModalWrapper>
      )}
    </>
  );
};

export default QuestionModal;
