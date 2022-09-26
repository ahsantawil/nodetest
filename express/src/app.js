import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send("this is page main")
});

app.get('/about', (req, res) => {
    res.send("this is page about")
});

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
});
