let links = ["1", "2", "3", "4", "5"];

const getLinksObjectArr = (links) => {
  let imagesLinks = [];
  for (let i = 0; i < links.length; i++) {
    imagesLinks.push({
      id: i,
      link: links[i],
    });
  }
  return imagesLinks;
};

console.log(getLinksObjectArr(links));
