export const getMaskedUserInput = (
  eValue: string,
  mask: string,
  type: "phone" | undefined
): string => {
  if (type === "phone") {
    const maskWihtCode = mask.substring(0, mask.indexOf("(") + 1);

    let unmasked = (userInput: string) => {
      if (!userInput) {
        return "";
      }

      if (userInput.length >= 1) {
        let substr = userInput.substring(userInput.indexOf("(") + 1);
        if (userInput.indexOf("(") < 0) {
          return "";
        }
        let onlyNumber = substr.match(/[0-9]/g);
        return onlyNumber ? onlyNumber!.join("") : "";
      } else {
        return "";
      }
    };

    let clearInput = unmasked(eValue);

    if (clearInput.length === 0) {
      return maskWihtCode;
    } else if (clearInput.length === 1) {
      return maskWihtCode + clearInput;
    } else if (clearInput.length > 0 && clearInput.length < 4) {
      return maskWihtCode + clearInput;
    } else if (clearInput.length === 4) {
      return maskWihtCode + clearInput.substring(0, 3) + ")" + clearInput[3];
    } else if (clearInput.length === 7) {
      return (
        maskWihtCode +
        +clearInput.substring(0, 3) +
        ")" +
        clearInput.substring(3, 6) +
        "-" +
        clearInput[6]
      );
    } else if (clearInput.length === 9) {
      return (
        maskWihtCode +
        +clearInput.substring(0, 3) +
        ")" +
        clearInput.substring(3, 6) +
        "-" +
        clearInput.substring(6, 8) +
        "-" +
        clearInput[8]
      );
    } else if (clearInput.length < 11) {
      return eValue;
    }
  }
  return eValue.substring(0, mask.length);
};
