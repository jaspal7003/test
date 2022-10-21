const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 8080;
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("This is the home page");
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

  app.listen(PORT, ()=>{
    console.log('server is runing at port 4000')
  });
