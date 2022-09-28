import express from 'express';
import request from 'supertest';
import expressUpload from 'express-fileupload';


const app = express();
app.use(expressUpload());

app.post('/', async (req, res) => {
    const textFile = req.files.article;
    const result = await textFile.mv(__dirname + '/upload' + textFile.name)

    res.send(`Hello ${req.body.name}, You upload ${textFile.name}`)
});

test('Test Express File Upload', async() => {    
    const res = await request(app).post('/')
        .field('name', 'Ahsan')
        .attach('article', __dirname + '/contoh.txt');
    expect(res.text).toBe('Hello Ahsan, You upload contoh.txt');
 });