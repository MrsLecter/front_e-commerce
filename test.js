let date = new Date("2023-07-20T19:00:05.000Z");
let dateArr = date.toLocaleString("uk-UA", {
  timeZone: "UTC",
  dateStyle: "short",
});
console.log(dateArr);
// console.log(`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`);
