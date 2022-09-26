import express from 'express';
import request from 'supertest';


const app = express();

app.get('/', (req, res) => {
    res.send(`Hello ${req.query.name}`);
});

test('test Query Paramater Request', async() => {    
    const res = await request(app).get('/').query({name: 'Ahsan'});
    expect(res.text).toBe('Hello Ahsan');
 });