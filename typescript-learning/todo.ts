let title: string = "My TODO app";
let maxTools: number =10;
let isActive: boolean = true;

let version=1.0;
let owner="Pahal";

console.log(`App: ${title}, Version: ${version}, Owner: ${owner}`);

function add(a: number, b: number): number {
    return a+b;
}
console.log("Sum:", add(5,3));

function greetUser(name: string, description?: string): string{
    return description
    ? `Hello ${name}, ${description}`
    : `Hello ${name}`;
}
console.log(greetUser("Pahal"));
console.log(greetUser("Pahal", "Welcome to the Todo App!"));