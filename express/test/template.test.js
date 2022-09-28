import express from 'express';
import request from 'supertest';
import mustacheExpress from 'mustache-express';


const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', mustacheExpress());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello World',
        say: 'This is a test'
    });
});

test('Test Template Engine', async() => {    
    const res = await request(app).get('/');
    console.log(res.text);
    expect(res.text).toContain('Hello World');
    expect(res.text).toContain('This is a test');
});