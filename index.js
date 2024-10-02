import { getRandom } from "./random.js";
import config from "./config.js";

const createCardNode = async () => {
  const imageSrc = await getRandom(
    `https://api.unsplash.com/photos/random?client_id=${config.API_KEY}`
  );

  const imagen = document.createElement("img");
  // debugger
  imagen.src = `${imageSrc.urls.regular}`;
  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";
  const parrafo = document.createElement("p");
  parrafo.className = "description";
  const text = document.createTextNode(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis ex, repudiandae dolorum illo illum itaque autem eveniet corporis et obcaecati est provident assumenda fuga aut debitis ab vel voluptas."
  );
  parrafo.appendChild(text);
  const card = document.createElement("div");
  card.className = "card";

  imageContainer.appendChild(imagen);
  card.appendChild(imageContainer);
  card.appendChild(parrafo);

  return card;
};

const mountNode = document.querySelector("#app");
const addCardButton = document.querySelector("button");

const addCard = async () => {
  mountNode.appendChild(await createCardNode());
};

addCardButton.addEventListener("click", addCard);
