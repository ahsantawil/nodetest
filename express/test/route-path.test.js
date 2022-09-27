import express from 'express';
import request from 'supertest';


const app = express();

app.get('/products/*.json', (req, res) => {
    res.send(req.originalUrl);
});

app.get('/categories/*(\\d+).json', (req, res) => {
    res.send(req.originalUrl);
});

test('Test Route path', async() => {    

    let res = await request(app).get('/products/meter.json');
    expect(res.text).toBe('/products/meter.json');

    res = await request(app).get('/products/salah.json');
    expect(res.text).toBe('/products/salah.json');

    res = await request(app).get('/categories/123.json');
    expect(res.text).toBe('/categories/123.json');

    res = await request(app).get('/categories/salah.json');
    expect(res.status).toBe(404);

 });