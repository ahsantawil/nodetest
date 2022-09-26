import express from 'express';
import request from 'supertest';


const app = express();

app.get('/', (req, res) => {
    if (req.query.name) {
        res.status(200).send(`Hello ${req.query.name}`);
    } else {
        res.status(400).end();
    }
});

test('Respone status', async () => { 
    let res = await request(app).get('/').query({ name: 'Ahsan' });
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello Ahsan');

    res = await request(app).get('/');
    expect(res.status).toBe(400);
 });

