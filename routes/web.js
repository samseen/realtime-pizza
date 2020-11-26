const authController = require('../app/http/controllers/authController')
const homeController = require ('../app/http/controllers/homeController')

function initRoutes(app) {
    
    app.get('/', homeController().index)
    // app.get('/', (req, res) => {
    //     res.render('home')
    // })

    app.get('/cart', (req, res) => {
        res.render('customers/cart')
    })
    
    app.get('/register', authController().register)
    
    app.get('/login', authController().login)
}

module.exports = initRoutes