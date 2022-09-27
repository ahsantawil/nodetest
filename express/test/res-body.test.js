import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.set({
        'Content-Type' : 'text/html'
    });
    res.send('<html><head><title>Hello HTML</title></head></html>');
});

test('Test Respone Body', async() => { 
    const res = await request(app).get('/');

    expect(res.get('Content-Type')).toContain('text/html');
    expect(res.text).toBe('<html><head><title>Hello HTML</title></head></html>');
});