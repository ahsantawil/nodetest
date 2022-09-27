import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.redirect('/to-next-page');
    //res.redirect(301,'/next-page');
    //res.redirect('https://citrasanxing.co.id');
});

test('Test Respone Redirect', async() => { 
    const res = await request(app).get('/');

    expect(res.status).toBe(302);
    expect(res.get('Location')).toBe('/to-next-page');
});