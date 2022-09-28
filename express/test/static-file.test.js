import express from 'express';
import request from 'supertest';

const app = express();
// app.use(express.static(__dirname + '/static'));
app.use('/static', express.static(__dirname + "/static"));
app.get('/', (req, res) => {
   res.send("Hello Ahsan");
});
app.get('/contoh.txt', (req, res) => {
   res.send("Hello Ahsan");
});


test('Test Static File', async () => { 
    let respone = await request(app).get('/');
    expect(respone.text).toBe('Hello Ahsan');
    
    respone = await request(app).get('/contoh.txt');
    expect(respone.text).toContain('Hello Static');
});

test('Test Static File Prefix', async () => { 
    let respone = await request(app).get('/');
    expect(respone.text).toBe('Hello Ahsan');
    
    respone = await request(app).get('/static/contoh.txt');
    expect(respone.text).toContain('Hello Static');
});