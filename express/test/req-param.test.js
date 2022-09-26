import express from 'express';
import request from 'supertest';


const app = express();

app.get('/', (req, res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test('Request Query Params ', async() => { 
    const res = await request(app)
        .get('/')
        .query({firstName: 'Ahsan', lastName: 'Tawil'});

    expect(res.text).toBe('Hello Ahsan Tawil');
});