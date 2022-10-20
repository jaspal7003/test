const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 8080;
app.use(cookieParser())

app.get('/get', (req, res) => {
    res.json(req.cookies);
})

app.get('/set/:key/:value', (req, res) => {
    const {key, value} = req.params;
    res.cookie(key, value);
    res.redirect('/get');
})

app.get('/clear/:key', (req, res) => {
    const {key} = req.params;
    res.clearCookie(key)
    res.redirect('/get')
})

app.listen(PORT, (err) => {
    console.log(`Server started at ${PORT}`)
})