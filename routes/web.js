const homeController = require ('../app/http/controllers/homeController')

function initRoutes(app) {
    
    app.get('/', homeController().index)
    // app.get('/', (req, res) => {
    //     res.render('home')
    // })

    app.get('/cart', (req, res) => {
        res.render('customers/cart')
    })
    
    app.get('/register', (req, res) => {
        res.render('auth/register')
    })
    
    app.get('/login', (req, res) => {
        res.render('auth/login')
    })
}

module.exports = initRoutes