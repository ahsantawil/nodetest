import express from 'express';
import request from 'supertest';


const app = express();

app.get('/', (req, res) => {
    res.set({
        'X-Powered-By' : 'Programming Ganteng',
        'X-Author' : 'Ahsan',
    });
    res.send('Hello Respone Header');
});


test('Test Respone Header', async() => { 
    const res = await request(app).get('/');

    expect(res.text).toBe('Hello Respone Header');
    expect(res.get('x-powered-by')).toBe('Programming Ganteng');
    expect(res.get('x-author')).toBe('Ahsan');
 })