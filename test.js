let rimsList = [
  {
    rimId: "12812",
    name: "InziAone - HB",
    image: "https://rims-i467.onrender.com/vt100_hb.jpg",
    diameter: ["18"],
    price: [4784],
  },
  {
    rimId: "11788",
    name: "InziAone - AMB",
    image: "https://rims-i467.onrender.com/VT-100_AMB_mini.jpg",
    diameter: ["18"],
    price: [4784],
  },
  {
    rimId: "12805",
    name: "MKW - HB",
    image: "https://rims-i467.onrender.com/mk150_hb.jpg",
    diameter: ["18"],
    price: [5299],
  },
  {
    rimId: "12813",
    name: "InziAone - MB",
    image: "https://rims-i467.onrender.com/vt100_mb.jpg",
    diameter: ["18", "18", "18"],
    price: [4784, 4784, 4784],
  },
  {
    rimId: "12806",
    name: "MKW - MB",
    image: "https://rims-i467.onrender.com/mk150_mb.jpg",
    diameter: ["18"],
    price: [5299],
  },
  {
    rimId: "12804",
    name: "MKW - AMB",
    image: "https://rims-i467.onrender.com/mk150_amb.jpg",
    diameter: ["18"],
    price: [5299],
  },
  {
    rimId: "3533",
    name: "MKW - Chrome",
    image: "https://rims-i467.onrender.com/mk_150_chrome.jpg",
    diameter: ["18", "18"],
    price: [5888, 5888],
  },
  {
    rimId: "12798",
    name: "Kosei - FS",
    image: "https://rims-i467.onrender.com/k3_fs_large.jpg",
    diameter: ["18"],
    price: [5299],
  },
  {
    rimId: "3511",
    name: "Marcello - AMB",
    image: "https://rims-i467.onrender.com/aim250_amb.jpg",
    diameter: ["18"],
    price: [4416],
  },
];

let str = '12" - диаметр;10" - ширина; 115x12 - крепежные отверстия';

const rez = str.match(/\d{2,}/g);
let newLink = `w-${rez[0]}&d-${rez[1]}&pcd-${rez[2]}x${rez[3]}`;
const params = newLink.match(/\d{2,}/g);
