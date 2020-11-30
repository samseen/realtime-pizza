import axios from 'axios'
const { update } = require("../../app/models/menu")

let addToCart = document.querySelectorAll('.add-to-cart')

function updateCart(pizza) {
    axios.post('/update-cart', pizza).then(res => {
        console.log(res)
    })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // let pizza = btn.dataset.pizza
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })
})