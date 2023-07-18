let str = "12345";

const getPrettyPrice = (price) => {
  let priceStr = String(price);
  for (let i = priceStr.length - 1; i >= 0; i--) {
    if (i % 3 === 0 && i !== 0) {
      priceStr =
        priceStr.slice(0, i - 1) + " " + priceStr.slice(i - 1, priceStr.length);
    }
  }
  return priceStr;
};

console.log(getPrettyPrice(45236));
