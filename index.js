const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 8080;
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("<a href="https://jaspal02.herokuapp.com/">Go 2 jaspal02</a>");
})

app.get('/get', (req, res) => {
    res.json(req.cookies);
})

app.get('/set/:key/:value', (req, res) => {
    const {key, value} = req.params;
    res.cookie(key, value, {});
    res.redirect('/get');
})

app.get('/clear/:key', (req, res) => {
    const {key} = req.params;
    res.clearCookie(key)
    res.redirect('/get')
})

  app.listen(process.env.PORT || 5000, ()=>{
    console.log('server is runing at port 4000')
  });
