const body = document.querySelector("body");
const paragraphs = document.querySelectorAll("p");

const styleBody = getComputedStyle(body);

for (let key in paragraphs) {
  if (Number(key) % 2 === 0) {
    paragraphs[key].style.backgroundImage = styleBody.backgroundImage;
  } else {
    paragraphs[key].style.color = "#F5A";
  }
}
