const express = require("express");
const path = require("path");
var fs = require('fs');
const app = express();

app.use(express.json())

app.set('view engine', 'ejs')
var myCss = {
	style : fs.readFileSync('views/css/style.ejs','utf8')
};
app.get('/', (req, res) => res.render('base', { isAuthenticated: false }))

app.post('/index', (req, res) => {
	
	res.render('pages/index', { username: undefined,myCss: myCss })
})
app.post('/about', (req, res) => {
	// console.log('req', req)
	res.render('pages/about',{ myCss: myCss })
})
app.post('/ContactUs', (req, res) => {
	// console.log('req', req)
	res.render('pages/ContactUs',{ myCss: myCss })
})
app.listen(process.env.PORT || 8080, () => console.log("Server running..."));