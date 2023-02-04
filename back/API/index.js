import express from "express";

const app = express();
const port = normalizePort(process.env.PORT || '3001');;

app.get('/test', (req, res) => {
    res.send('Hello world');
})

app.listen(port, () => {
    console.log(`Listening on port : ${port}`)
})