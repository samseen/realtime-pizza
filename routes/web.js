function initRoutes() {
    app.get('/', (req, res) => {
        res.render('home')
    })
}