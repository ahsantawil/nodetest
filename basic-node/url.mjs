import { URL } from "url";


const csi = new URL("https://www.citrasanxing.co.id/product");

console.log(csi.toString());
console.log(csi.protocol);
console.log(csi.host);
console.log(csi.pathname);
console.log(csi.searchParams);

csi.host = "www.citrasanxing.co.id";
const searchParams = csi.searchParams;
searchParams.append("status", "premium");

console.log(csi.toString());