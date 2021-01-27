const express = require('express');
const app = express();

const mainRouter = require ("./routes/mainRouter")
app.use(express.static('public'));

const productsRouter = require ("./routes/productsRouter")

const usersRouter = require ("./routes/usersRouter")


app.use(express.static('public'));

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});
app.set ("view engine" , "ejs")
app.set ("views" , "src/views")
app.set ("views" , "src/views/products")
app.set ("views" , "src/views/users")

app.get('/', mainRouter);

app.get('/login', usersRouter);

app.get('/register', usersRouter);

app.get('/carrito',productsRouter);

app.get('/provincia', productsRouter);