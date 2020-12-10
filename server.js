const express = require("express");
const path = require("path");

const app = express();

app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('base', { isAuthenticated: false }))

app.post('/index', (req, res) => {
	// console.log('req', req)
	res.render('pages/index', { username: undefined })
})
app.post('/about', (req, res) => {
	// console.log('req', req)
	res.render('pages/about')
})
app.post('/ContactUs', (req, res) => {
	// console.log('req', req)
	res.render('pages/ContactUs')
})
app.listen(process.env.PORT || 8081, () => console.log("Server running..."));