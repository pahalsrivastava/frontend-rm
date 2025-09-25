# GraphQL: The Schema

A **GraphQL schema** serves as a contract between the server and the client. It defines:

- **What the API can do** — which data can be queried or mutated.  
- **How clients interact with the API** — the structure and types of data they can request or change.  

The schema acts as an **abstraction layer**, providing flexibility for clients while hiding backend implementation details.

---

## Schema Definition Language (SDL) Crash Course

GraphQL schemas are defined using **SDL (Schema Definition Language)**. Key points:

- A **schema** is a collection of **object types**.  
- Each **object type** contains **fields**, and each field has a **type**.  
- Field types can be **scalar types** (e.g., `Int`, `String`) or **other object types**.  

Example: the `Track` object type may have an `author` field of type `Author`.

---

## Defining Object Types

Use the `type` keyword followed by the **type name** (PascalCase recommended) and curly braces `{}` to declare fields:

```graphql
type SpaceCat {
  name: String 
  age: Int! #for not null
  mission: [Mission] #list of missions
}

SCHEMA DESCRIPTIONS :
```graphql 
"NORMAL DESCRIPTION"
"""THIS IS A
MULTIPLE LINE
DESCRIPTION"""