export const isValidInput = (
  value: string,
  type: "phone" | undefined
): boolean => {
  if (type === "phone" && value.length > 14) {
    return true;
  }
  return false;
};
