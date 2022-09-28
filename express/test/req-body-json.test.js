import express from 'express';
import request from 'supertest';


const app = express();
app.use(express.json());
app.post('/json', (req, res) => {
    const name = req.body.name;
    res.json({hello: `Hello ${name}`})
});

app.use(express.urlencoded({extended: false}));
app.post('/form', (req, res) => {
    const name = req.body.name;
    res.json({hello: `Hello ${name}`})
});

test('test Request Body Json', async() => {    
    const res = await request(app)
        .post('/json')
        .set("Content-Type", "application/json")
        .send({name: 'Ahsan'});
    expect(res.body).toEqual({hello: 'Hello Ahsan'});
});

test('test Request Body form', async() => {    
    const res = await request(app)
        .post('/form')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send('name=Ahsan');
    expect(res.body).toEqual({hello: 'Hello Ahsan'});
});