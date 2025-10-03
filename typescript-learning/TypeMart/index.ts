import products, { Product } from "./products";
function findProductByName(name: string): Product | string {
    const product = products.find(
        (p)=> p.name.toLowerCase() === name.toLowerCase()
    );
    if(!product){
        return `Product "${name}" not found`;
    }
    return product;
}
console.log ("File is running");
const productName = "fanny pack";
const result= findProductByName(productName);
console.log(result);