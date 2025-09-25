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

```js
type SpaceCat {
  name: String 
  age: Int! #for not null
  mission: [Mission] #list of missions
}
```
SCHEMA DESCRIPTIONS :
```js
"NORMAL DESCRIPTION"
"""THIS IS A
MULTIPLE LINE
DESCRIPTION"""

## Query type

The `Query` type defines entry points for the client to fetch data:

```js
type Query {
  "Get tracks array for homepage grid"
  tracksForHome: [Track!]!
}

###Track type:
```js
"A track is a group of Modules that teaches about a specific topic"
type Track {
  id: ID!
  "The track's title"
  title: String!
  "The track's main author"
  author: Author!
  "The track's main illustration to display in track card or track page detail"
  thumbnail: String
  "The track's approximate length to complete, in minutes"
  length: Int
  "The number of modules this track contains"
  modulesCount: Int
}

###MOCKED DATA:
```js 
const mocks = {
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => ({
      name: "Grumpy Cat",
      photo: "https://res.cloudinary.com/.../catstrophysicist.jpg"
    }),
    thumbnail: () => "https://res.cloudinary.com/.../nebula_cat.jpg",
    length: () => 1210,
    modulesCount: () => 6
  }),
  Query: () => ({
    tracksForHome: () => [...new Array(6)]
  }),
  SpaceCat: () => ({
    id: "spacecat_01",
    name: "spacecat pioneer",
    age: 3,
    missions: []
  })
};

### Testing Queries on the Local Server

Once your Apollo Server is running, it will log a URL similar to:

You can open this URL in your browser or Apollo Explorer to run test queries.

---

### Example Query

Here’s a sample query to fetch tracks with mocked data:

```js
query {
  tracksForHome {
    id
    title
    author {
      name
      photo
    }
    thumbnail
    length
    modulesCount
  }
}

## EFFECTIVE WAYS OF WRITING A QUERY: 
1. Test Out queries in GraphOS studio Explorer and copy them over.
2. Wrap each query in gql template literal
3.include only the fields that the client requires
4. Assign each query string to a constant with an ALL_CAPs name

## Using the `useQuery` Hook in Apollo Client
-it is used to execute queries in our frontend app. 
The `useQuery` hook is provided by `@apollo/client` to fetch data from a GraphQL server directly in React functional components.

---

### Syntax

```js
const { loading, error, data } = useQuery(YOUR_QUERY, {
  variables: { /* optional variables */ },
  fetchPolicy: "cache-first", // optional caching strategy
});

###GRAPHQL server:
