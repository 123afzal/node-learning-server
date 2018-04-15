/**
 * Created by Syed Afzal
 */
const express = require('express');
const hbs = require('hbs');

let port = process.env.PORT || 3000;
var app = express();


//this line register your views partials
hbs.registerPartials(__dirname+ '/views/partials');

//this line define what view engine you will use
app.set('view engine', 'hbs');

//this line is to make static directory,but if you put that file name index.htnl it will allways render on this path "/"
app.use(express.static(__dirname + '/public'));

//this line is used to register helper in a project
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('getTextUpperCase', (txt)=>{
    return txt.toUpperCase();
})


app.get('/', (req,res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home',
        name: "Syed Afzal",
    })
})

app.get('/about', (req,res)=>{
    res.render('home.hbs',{
        pageTitle: 'About Us',
        name: "Syed Afzal",
    })
})

app.listen(port, () => {
    console.log("Server is up on port", port)
})