import express from 'express';
import request from 'supertest';


const app = express();

app.get('/hello/ahsan', (req, res) => {
    res.json({
        path: req.path,
        originalUrl: req.originalUrl,
        hostname: req.hostname,
        protocol: req.protocol,
        secure: req.secure
    })
});

test('test Request URL', async() => {    
    const res = await request(app)
        .get('/hello/ahsan')
        .query({name: 'Ahsan'});

    expect(res.body).toEqual({
        path: '/hello/ahsan',
        originalUrl: '/hello/ahsan?name=Ahsan',
        hostname: '127.0.0.1',
        protocol: 'http',
        secure: false
    });
 });