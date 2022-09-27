import express from 'express';
import request from 'supertest';

const logger = (req, res, next) => {
    console.log(`Receive request: ${req.method} ${req.originalUrl}`);
    next();
};

const addPoweredHeader = (req, res, next) => {
    res.set('X-Powered-By', 'Programmer Ganteng');
    next();
};

const apiKeyMidlleware = (req, res, next) => {
    if (req.query.apiKey) {
        next()
    } else {
        res.status(401).end();
    }
};

const requestTimeMiddleware = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};


const app = express();
app.use(logger);
app.use(apiKeyMidlleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get('/', (req, res) => {
    res.send(`Hello Ahsan`);
});

app.get('/time', (req, res) => {
    res.send(`Hello, Today is ${req.requestTime}`);
});

test('Test Middleware', async() => {    
    const res = await request(app).get('/').query({apiKey: '1'})
    // expect(res.status).toBe(401);
    expect(res.get('X-Powered-By')).toBe('Programmer Ganteng');
    expect(res.text).toBe('Hello Ahsan');
    
});

test('Test Middleware Unauthorized', async() => {    
    const res = await request(app).get('/')
    expect(res.status).toBe(401);
 });

test('Test Request Time Middleware', async() => {    
    const res = await request(app).get('/time').query({apiKey: '1'});
    expect(res.text).toContain(`Hello, Today is`);
    console.log(res.text);
 });