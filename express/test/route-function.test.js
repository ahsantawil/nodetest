import express from 'express';
import request from 'supertest';


const app = express();

app.route('/product')
    .get((req, res) => {
        res.send('Get Product');
    })
    .post((req, res) => {
        res.send('Create Product');
    })
    .put((req, res) => {
        res.send('Update Product');
    });


test('Test Route path', async() => {    

    let res = await request(app).get('/product');
    expect(res.text).toBe('Get Product');

    res = await request(app).post('/product');
    expect(res.text).toBe('Create Product');

    res = await request(app).put('/product');
    expect(res.text).toBe('Update Product');

 });