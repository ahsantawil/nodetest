import cluster from 'cluster';
import http from 'http';
import process from 'process';
import os from 'os';

if (cluster.isPrimary) {
    // console.log(`primary: ${process.pid}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.addListener("exit", (worker) => {
        console.log(`Worker ${worker.id} is exit`);
        cluster.fork();
    })
}

if (cluster.isWorker) {
    const server = http.createServer((req, res) => {
        res.write(`Respone from process ${process.pid}`);
        res.end();
        process.exit();
    })

    server.listen(3000);
    console.log(`Start cluster worker ${process.pid}`);
}