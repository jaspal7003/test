const express = require('express');
const app = express();
const https = require('https');
const cookieParser = require('cookie-parser');
const PORT = 8080;
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('<a href="https://jaspal02.herokuapp.com/">Go 2 jaspal02</a>');
})

app.get('/get', (req, res) => {
    res.json(req.cookies);
})

app.get('/set/:key/:value', (req, res) => {
    const {key, value} = req.params;
    try{
        res.cookie(key, value, {sameSite:"none", strict: true});
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
const httpsServer = https.createServer(app);

  httpsServer.listen(process.env.PORT || 5000, ()=>{
    console.log('server is runing at port 4000')
  });
