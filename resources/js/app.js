const { update } = require("../../app/models/menu")

let addToCart = document.querySelectorAll('.add-to-cart')

function updateCart(pizza) {
    // 
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // let pizza = btn.dataset.pizza
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })
})