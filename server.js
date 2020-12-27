const express = require("express");
const path = require("path");
var fs = require('fs');
const app = express();

app.use(express.json())

app.set('view engine', 'ejs')
var myCss = {
    style: fs.readFileSync('views/css/style.ejs', 'utf8')
};
app.get('/', (req, res) => res.render('base', { isAuthenticated: false }))


app.get('/index', (req, res) => {
  console.log("3   " )
  let username = req.query.username;
  let password = req.query.password;
  if(username === 'ori'){
    console.log("here 1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    if(password === 'bibi'){
      console.log("here 2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  res.render('pages/Main',{ myCss: myCss })
    }}
    else{
      res.render('pages/index', { username: username,myCss: myCss })

    }
})

app.post('/index', (req, res) => {
	let username = req.query.username;
  let password = req.query.password;
	res.render('pages/index', { username: username,myCss: myCss })
  console.log("what happen" + username)
  
    /*if (username === 'ori' && password == 'bibi' || username === 'ori' && password == 'oribibi' ||username === 'yigal' && password == 'fishler')
    {

	 console.log("login")
	 res.render('pages/Main', { username: username,myCss: myCss })
   } 
  else{
	res.send(username + ' not loggin! ');
console.log("not login")
	  res.render('pages/index', { username: username,myCss: myCss })
   }*/
	
})
app.post('/about', (req, res) => {
    // console.log('req', req)
    res.render('pages/about', { myCss: myCss })
})
app.post('/ContactUs', (req, res) => {
	res.render('pages/ContactUs',{ myCss: myCss })
})
app.post('/Main', (req, res) => {
  console.log("1  ")

	res.render('pages/Main',{ myCss: myCss })
})
app.get('/Main', (req, res) => {
  console.log("2  " )

	res.render('pages/Main',{ myCss: myCss })
})

app.listen(process.env.PORT || 8080, () => console.log("Server running..."));

