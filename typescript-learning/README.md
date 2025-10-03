# TYPESCRIPT
---
### Purpose of typescript
One of TypeScript's core principle is that type-checking focuses on the shape that values have. 

```typescript 
interface MyInterface{
  a: number;
  b: string;
}
```
### Advantages over javascript
+ Early error detection (static typing)
+ improved code quality and maintainabiltiy
+ rich IDE support 

### Basic datatypes
Typescript has primitive datatypes.   
+ number
+ string
+ boolean 
+ null 
+ undefined
+ symbol 
+ bigint

### function types 
A function in typescript includes:  parameter types, return type, type inference, contextual typing, function overloads.
+ named functions 
+ anonymous functions
+ arrow functions 
+ optional and default parameters
+ return type
+ void return 

### Variables and their types in typescript 
Variables store values and are declared using let, const or var. 
+ var
+ let
+ const
Types of variables: 
    -> primitive types
    -> string
    -> boolean 
    -> null
    -> undefined

### Type inference
```typescript 
let inferredString = "TypeScript"; 
let inferredNumber = 123;   
```