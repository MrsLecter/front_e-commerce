let rims = [
  {
    rimId: "3531",
    name: "MKW - MK 150",
    image: "https://rims-i467.onrender.com/mk_150_ams.jpg",
    diameter: "18",
    price: 4416,
  },
  {
    rimId: "3397",
    name: "MKW - MK 26",
    image: "https://rims-i467.onrender.com/MK-260AMB.JPG",
    diameter: "16",
    price: 3679,
  },
  {
    rimId: "12264",
    name: "MKW - MK 36",
    image: "https://rims-i467.onrender.com/mk_36_amb.jpg",
    diameter: "18",
    price: 5299,
  },
  {
    rimId: "2986",
    name: "InziAone - VD 030",
    image: "https://rims-i467.onrender.com/VD-0300MB.JPG",
    diameter: "19",
    price: 5667,
  },
  {
    rimId: "3449",
    name: "MKW - MK 72",
    image: "https://rims-i467.onrender.com/mk72_ams.jpg",
    diameter: "17",
    price: 3532,
  },
  {
    rimId: "3407",
    name: "MKW - MK 36",
    image: "https://rims-i467.onrender.com/mk36.jpg",
    diameter: "20",
    price: 5888,
  },
  {
    rimId: "12264",
    name: "MKW - MK 36",
    image: "https://rims-i467.onrender.com/mk_36_amb.jpg",
    diameter: "20",
    price: 5888,
  },
  {
    rimId: "11770",
    name: "InziAone - XR 050",
    image: "https://rims-i467.onrender.com/XR-050_HB_mini.jpg",
    diameter: "18",
    price: 5152,
  },
  {
    rimId: "3593",
    name: "Marcello - MR 21",
    image: "https://rims-i467.onrender.com/mr_21_ammb.jpg",
    diameter: "18",
    price: 4416,
  },
  {
    rimId: "3219",
    name: "MKW - A605",
    image: "https://rims-i467.onrender.com/605_chrome.jpg",
    diameter: "22",
    price: 7359,
  },
  {
    rimId: "3479",
    name: "MKW - WO 01",
    image: "https://rims-i467.onrender.com/wo_01_chrome.jpg",
    diameter: "18",
    price: 5888,
  },
  {
    rimId: "11770",
    name: "InziAone - XR 050",
    image: "https://rims-i467.onrender.com/XR-050_HB_mini.jpg",
    diameter: "17",
    price: 4416,
  },
  {
    rimId: "3473",
    name: "MKW - MK F74",
    image: "https://rims-i467.onrender.com/mk_f74_chrome.jpg",
    diameter: "17",
    price: 4710,
  },
  {
    rimId: "11770",
    name: "InziAone - XR 050",
    image: "https://rims-i467.onrender.com/XR-050_HB_mini.jpg",
    diameter: "17",
    price: 4416,
  },
  {
    rimId: "3485",
    name: "MKW - Zora 12",
    image: "https://rims-i467.onrender.com/zora_12_amb.jpg",
    diameter: "20",
    price: 5299,
  },
  {
    rimId: "11770",
    name: "InziAone - XR 050",
    image: "https://rims-i467.onrender.com/XR-050_HB_mini.jpg",
    diameter: "18",
    price: 5152,
  },
  {
    rimId: "11770",
    name: "InziAone - XR 050",
    image: "https://rims-i467.onrender.com/XR-050_HB_mini.jpg",
    diameter: "17",
    price: 4416,
  },
  {
    rimId: "11770",
    name: "InziAone - XR 050",
    image: "https://rims-i467.onrender.com/XR-050_HB_mini.jpg",
    diameter: "17",
    price: 4416,
  },
  {
    rimId: "3526",
    name: "Marcello - DR 01",
    image: "https://rims-i467.onrender.com/DR-010AMB.JPG",
    diameter: "18",
    price: 4563,
  },
  {
    rimId: "3290",
    name: "MKW - D 27",
    image: "https://rims-i467.onrender.com/diamo_27_chrome.jpg",
    diameter: "20",
    price: 6476,
  },
];

let map = new Map();
let sortedRimData = null;
for (let rim of rims) {
  const currRimId = rim.rimId;
  if (map.has(currRimId)) {
    let rimObj = map.get(currRimId);
    rimObj.diameter.push(rim.diameter);
    rimObj.price.push(rim.price);

    map.delete(currRimId);
    map.set(currRimId, rimObj);
  }
  if (!map.has(currRimId)) {
    const rimObj = {
      rimId: currRimId,
      name: rim.name,
      image: rim.image,
      diameter: [rim.diameter],
      price: [rim.price],
    };

    map.set(currRimId, rimObj);
  }
  sortedRimData = Array.from(map, ([name, value]) => value);
}
console.log(sortedRimData);
