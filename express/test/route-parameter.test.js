import express from 'express';
import request from 'supertest';


const app = express();

app.get('/products/:id', (req, res) => {
    res.send(`Product: ${req.params.id}`);
});

app.get('/categories/:id(\\d+)', (req, res) => {
    res.send(`Category: ${req.params.id}`);
});

test('Test Route parameter', async() => {    

    let res = await request(app).get('/products/meter');
    expect(res.text).toBe('Product: meter');

    res = await request(app).get('/products/modem');
    expect(res.text).toBe('Product: modem');

    res = await request(app).get('/categories/123');
    expect(res.text).toBe('Category: 123');

    res = await request(app).get('/categories/salah');
    expect(res.status).toBe(404);

 });