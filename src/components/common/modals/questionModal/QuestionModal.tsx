import modalService from "@/api/modal-service";
import BlueBtn from "@/components/common/buttons/blueBtn/BlueBtn";
import { AppModals } from "@/constants/common";
import { useInput } from "@/hooks/use-input";
import { IModalProps } from "@/types/common.types";
import { EMAIL_REGEXP, PHONE_REGEXP } from "@/utils/regexp";
import { FC, KeyboardEvent, useEffect, useState } from "react";
import Input from "../../input/Input";
import TextArea from "../../textArea/TextArea";
import ModalWrapper from "../../wrappers/modalWrapper/ModalWrapper";
import ModalContent from "../elements/ModalContentElement";
import ModalHeader from "../elements/ModalHeaderElement";
import ErrorContent from "../elements/feedbackContent/ErrorContent";
import SuccessContent from "../elements/feedbackContent/SuccessContent";
import { StyledQuestionModal } from "./QuestionModal.styles";

const QuestionModal: FC<IModalProps> = ({ managementObject }) => {
  const [text, setText] = useState<string>("");
  const [isQuestionSend, setQuestionSend] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const {
    value: email,
    error: emailIsValid,
    changeHandler: emailChangeHandler,
    refresh: refreshEmailHandler,
  } = useInput({
    regexp: EMAIL_REGEXP,
    allowEmpty: false,
  });

  const {
    value: phone,
    error: phoneIsValid,
    changeHandler: phoneChangeHandler,
    refresh: refreshPhoneHandler,
  } = useInput({
    regexp: PHONE_REGEXP,
    allowEmpty: true,
    maskType: "phone",
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

    if (
      (phoneIsValid && phone) ||
      (phoneIsValid && phone && email && emailIsValid)
    ) {
      try {
        await modalService.postFeedback({
          question: text || " ",
          email,
          phone,
        });

        setQuestionSend(true);
        setTimeout(() => {
          setQuestionSend(false);
          setText("");
          setError(false);
          refreshEmailHandler();
          refreshPhoneHandler();
        }, 5000);
      } catch (err) {
        setError(true);
      }
    }
  };

  useEffect(() => {
    setQuestionSend(false);
    setText("");
    setError(false);
    refreshEmailHandler();
    refreshPhoneHandler();
  }, [managementObject.isAppearing]);

  return (
    <>
      {!managementObject.isActive(AppModals.Question) && <></>}
      {managementObject.isActive(AppModals.Question) && (
        <ModalWrapper
          backClickHandler={() => managementObject.closeHandler()}
          isAppearing={managementObject.isAppearing}
        >
          <StyledQuestionModal>
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
                    maxLen={12}
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
