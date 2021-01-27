const express = require('express');
const app = express();

app.use(express.static('public'));

app.set ("view engine" , "ejs")
app.set ("views" , "src/views")

const mainRouter = require ("./routes/mainRouter")
const productsRouter = require ("./routes/productsRouter")
const usersRouter = require ("./routes/usersRouter")


app.get('/', mainRouter);

app.get('/login', usersRouter);

app.get('/register', usersRouter);

app.get('/carrito',productsRouter);

app.get('/provincia', productsRouter);

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});