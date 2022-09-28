import express from 'express';
import request from 'supertest';
import cookieParser from 'cookie-parser';


const app = express();
app.use(express.json());
app.use(cookieParser('SECRETKEYRAHASIA'));
app.post('/', (req, res) => {
    const name = req.body.name;
    res.cookie('Login', name, {path: '/', signed: true});
    res.send(`Hello ${name}`);
});

app.get('/', (req, res) => {
    const name = req.signedCookies['Login'];
    res.send(`Hello ${name}`);
});


test('test Signed Cookie', async() => {    
    const res = await request(app).post('/')
    .send({name: 'Zahwa'});
    console.log(res.get('Set-Cookie').toString());
    
    expect(res.get('Set-Cookie').toString()).toContain('Zahwa');
    expect(res.text).toBe('Hello Zahwa');
});

test('test Read Signed Cookie', async() => {    
    const res = await request(app).get('/')
        .set('Cookie', 'Login=s%3AZahwa.eI9LisfCFZPAPPb9%2FPsMEJWirzHZdJ8upZ4DLX%2BOfHs; Path=/');
    expect(res.text).toBe('Hello Zahwa');
});
