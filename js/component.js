'use strict'

import { livros } from "./livros.js"


class card extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.imagem = null
        this.titulo = 'Titulo Produto'
        this.preco = 'R$0.0'
    }

    static get observedAttributes(){
        return [
            'imagem',
            'titulo', 
            'descricao', 
            'preco'
        ]
    }


    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles(){
        const css = document.createElement('style')
        css.textContent = `
        
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .card {
            position: relative;
            width: 11.875em;
            height: 16.5em;
            box-shadow: 0px 1px 13px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: all 120ms;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            padding: 0.5em;
            padding-bottom: 3.4em;
          }
          
          .card::after {
            content: "Add to Cart";
            padding-top: 1.25em;
            padding-left: 1.25em;
            position: absolute;
            left: 0;
            bottom: -60px;
            background: #00AC7C;
            color: #fff;
            height: 2.5em;
            width: 90%;
            transition: all 80ms;
            font-weight: 600;
            text-transform: uppercase;
            opacity: 0;
          }
          
          .card .title {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.9em;
            position: absolute;
            left: 0.625em;
            bottom: 1.875em;
            font-weight: 400;
            color: #000;
          }
          
          .card .price {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-size: 0.9em;
            position: absolute;
            left: 0.625em;
            bottom: 0.625em;
            color: #000;
          }
          
          .card:hover::after {
            bottom: 0;
            opacity: 1;
          }
          
          .card:active {
            transform: scale(0.98);
          }
          
          .card:active::after {
            content: "Added !";
            height: 3.125em;
          }
          
          .text {
            max-width: 55px;
          }
          
          .image {
            background: rgb(241, 241, 241);
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
          }
        `

        return css
    }
    
    component(){
        const card = document.createElement('div')
        card.classList.add('card')

        const card__image = document.createElement('img')
        card__image.classList.add('card__image')
        card__image.src = this.imagem

        const card__title = document.createElement('h5')
        card__title.classList.add('card__title')
        card__title.textContent = this.titulo

        const card__price = document.createElement('span')
        card__price.classList.add('card__price')
        card__price.textContent = this.preco

        card.append(card__image, card__title, card__description, card__price)

     
        return card
    }
}

customElements.define('card-produto', card)
// const criaCard = ( produto ) =>{
//     const card = document.createElement('div')
//     card.classList.add('card')

//     const foto = document.createElement('img')
//     foto.classList.add('card__image')
//     foto.src =`${produto.image}`

//     const titulo = document.createElement('h5')
//     titulo.classList.add('card__title')
//     titulo.textContent = produto.name

//     const descricao = document.createElement('p')
//     descricao.classList.add('card__decription')
//     descricao.textContent = produto.description

//     card.append(foto, titulo, descricao)

//     return card
// }

// const carregarProdutos = () => {
//     const container = document.getElementById('container')
//     const cards = produtos.map( criaCard )

//     container.replaceChildren(...cards)
// }

// carregarProdutos()
