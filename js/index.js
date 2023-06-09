"use strict";

import livros from "../livros.js";

const livrosArray = livros[0].books;

const container = document.querySelector(".container");

let card = document.createElement("a");

let cardImage;
let cardTitle;
let cardPrice;

livrosArray.forEach((livro) => {
  card = document.createElement("a");
  card.setAttribute("href", "./livro.html");
  card.classList.add("card");
  card.id = livro.isbn13;

  cardImage = document.createElement("img");
  cardImage.setAttribute("src", livro.image);
  cardImage.classList.add("card__image");

  cardTitle = document.createElement("span");
  cardTitle.textContent = livro.title;
  cardTitle.classList.add("card__title");

  cardPrice = document.createElement("span");
  cardPrice.textContent = livro.price;
  cardPrice.classList.add("card__price");

  card.append(cardImage, cardTitle, cardPrice);
  //   console.log(card);

  container.append(card);

  //   -------------------------------------------------------------------

  let isbnLivro;

  const handleClick = function (event) {
    isbnLivro = event.currentTarget.id;

    localStorage.setItem("isbn", isbnLivro);
    console.log("local", localStorage.getItem("isbn"));
  };

  card.addEventListener("click", handleClick);
});
