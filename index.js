const express = require('express');
const app = express();
const http = require('http');
const cookieParser = require('cookie-parser');
const PORT = 8080;
app.set('trust proxy', 1)
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('<a href="https://jaspal02.herokuapp.com/">Go 2 jaspal02</a>');
})

app.use((req, res, next)=>{
    req["sessionCookies"].secure = true;
    next();
});

app.get('/get', (req, res) => {
    res.json(req.cookies);
})

app.get('/set/:key/:value', (req, res) => {
    const {key, value} = req.params;
    try{
        res.cookie(key, value, {sameSite:"lex"});
    }catch(err) {
        res.json(err);
    }
    res.redirect('/get');
})

app.get('/clear/:key', (req, res) => {
    const {key} = req.params;
    res.clearCookie(key)
    res.redirect('/get')
})
const httpServer = http.createServer(app);

  app.listen(process.env.PORT || 5000, ()=>{
    console.log('server is runing at port 4000')
  });
