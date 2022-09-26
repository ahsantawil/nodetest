import express from 'express';
import request from 'supertest';

const app = express();


app.get('/', (req, res) => {
    res.send("this is page main")
});

test('this is page main', async () => { 
    const respone = await request(app).get('/');
    expect(respone.text).toBe('this is page main')
 })