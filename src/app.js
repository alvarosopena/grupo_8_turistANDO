const express = require('express');
const app = express();
app.use(express.static('public'));



app.listen(process.env.PORT || 3001, ()=>{
    console.log('Servidor funcionando');
});
app.set ("view engine" , "ejs")

app.get('/', (req,res)=>{
    res.render(__dirname + '/views/home.ejs');
});

app.get('/login', (req,res)=>{
    res.render(__dirname + '/views/login.ejs');
});

app.get('/register', (req,res)=>{
    res.render(__dirname + '/views/register.ejs');
});

app.get('/carrito', (req,res)=>{
    res.render(__dirname + '/views/carritoDeCompras.ejs');
});

app.get('/provincia', (req,res)=>{
    res.render(__dirname + '/views/provincia1.ejs');
});