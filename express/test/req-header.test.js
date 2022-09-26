import express from 'express';
import request from 'supertest';


const app = express();

app.get('/', (req, res) => {
    const type = req.get('Accept');
    res.send(`Hello ${type}`);
});

test('Request Header', async() => { 
    const res = await request(app)
        .get('/')
        .set('Accept', 'text/plain');

    expect(res.text).toBe('Hello text/plain');
});