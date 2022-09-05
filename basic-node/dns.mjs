// Callback
// import dns from 'dns';

// function callback(error, ip) {
//     console.log(ip);
// }


// dns.lookup("www.citrasanxing.co.id", callback);

// Promise

import dns from 'dns/promises';

const lookup = await dns.lookup("www.citrasanxing.co.id");

console.log(lookup.family);
console.log(lookup.address);