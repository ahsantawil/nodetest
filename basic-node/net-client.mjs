import net from 'net';

const connection = net.createConnection({
    port: 3000, 
    host: "localhost"
});

setInterval(()=>{
    connection.write(`${process.argv[2]}\r\n`);
}, 2000);

connection.addListener("data", function(data){
    console.log(`Receive data from sever: ${data.toString()}`);
})