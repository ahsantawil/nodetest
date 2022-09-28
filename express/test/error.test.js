import express from 'express';
import request from 'supertest';

const erroMiddleware = (err, req, res, next) => {
    res.status(500).send(`Terjadi Error: ${err.message}`);
};

const app = express();
app.get('/', (req, res) => {
    throw new Error("Ups");
});

app.use(erroMiddleware); // tempatkan diposisi paling akhir

test('Test Error Middleware', async () => { 
    const respone = await request(app).get('/');
    expect(respone.status).toBe(500);
    expect(respone.text).toBe('Terjadi Error: Ups');
});