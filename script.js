document.querySelector("button").addEventListener("click", add);

function add() {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  const rnd = getRandomInt(1000);

  copy.querySelector("img").src = `https://picsum.photos/id/${rnd}/200/300.jpg`;

  const mainEl = document.querySelector("main");
  mainEl.appendChild(copy);

  window.scrollTo(0, document.body.scrollHeight);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
