import axios from 'axios'
const { update } = require("../../app/models/menu")

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector("#cartCounter")

function updateCart(pizza) {
    axios.post('/update-cart', pizza).then(res => {
        console.log(res)
        cartCounter.innerText = res.data.totalQty
    })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // let pizza = btn.dataset.pizza
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })
})