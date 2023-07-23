let str = "/makers/all/Acura/MDX/2016";

let arrStr = str.substring(1, str.length).split("/");
arrStr.splice(0, 1);
console.log(arrStr);
