import express from 'express';
import request from 'supertest';

const app = express();
const router = express.Router();

router.use((req, res, next) => {
    console.log(`Receive request: ${req.originalUrl}`);
    next();
});

router.get('/feature/a', (req, res) => {
    res.send('Feature A');
});

// const featureEnable = true;
// if (featureEnable) {
//     app.use(router)
// } else {
//     app.use(router)
//     res.send(404).end();
// }

test('Test Router Disable', async() => {    
    const res = await request(app).get('/feature/a');
    expect(res.status).toBe(404);
});

test('Test Router Enable', async() => {   
    app.use(router);
     
    const res = await request(app).get('/feature/a');
    expect(res.text).toBe('Feature A');
});