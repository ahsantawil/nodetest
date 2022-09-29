import express from 'express';
import request from 'supertest';

const app = express();


app.get('/', (req, res) => {
    res.send("This is page main")
});

app.use((rqe, res, next) => {
    res.status(404).send("404 Not Found")
});

test('Test Not Found', async () => { 
    let respone = await request(app).get('/');
    expect(respone.text).toBe('This is page main');
    respone = await request(app).get('/ups');
    expect(respone.text).toBe('404 Not Found');
});