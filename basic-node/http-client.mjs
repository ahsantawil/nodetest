import https from 'https';


const url = "https://hookb.in/7ZkmlgrwlRiWXDmW3pDr";
const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-type" : "application/json",
        "Accept" : "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.log(`Receive : ${data.toString()}`);
    })
});


const body = JSON.stringify({
    firstName : "Ahsan",
    lastName: "Ta'wil",
});

request.write(body);
request.end();