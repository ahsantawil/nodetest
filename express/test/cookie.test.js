import express from 'express';
import request from 'supertest';
import cookieParser from 'cookie-parser';


const app = express();
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
    const name = req.cookies['name'];
    res.send(`Hello ${name}`);
});

app.post('/login', (req, res) => {
    const name = req.body.name;
    res.cookie('Login', name, {path:'/'});
    res.send(`Hello ${name}`);
});


test('test Read Cookie', async() => {    
    const res = await request(app).get('/')
        .set('Cookie','name=Ahsan;author=ahsantawil.com');
    expect(res.text).toBe('Hello Ahsan');
});

test('test Create Cookie', async() => {    
    const res = await request(app).post('/login')
        .send({name: 'Ahsan'});
    expect(res.get('Set-Cookie').toString()).toContain('Ahsan');
    expect(res.text).toBe('Hello Ahsan');
});
