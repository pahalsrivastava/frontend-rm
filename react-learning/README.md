## Event Handling Demo
- **Button Click:** Increments a counter on each click.
- **Form Submission:** Handles submit with `preventDefault()` to avoid page reload.
- **Routing:** Accessible via `/events` using React Router.

## Synthetic Event System
React uses **Synthetic Events** to normalize events across different browsers. Key points:

- Wraps the native browser event.
- Provides a consistent interface regardless of the browser.
- Supports event pooling for performance optimization (events are reused internally).

**Example:**
```jsx
function handleClick(event) {
  console.log("Button clicked!");
  console.log(event.type); // logs 'click'
}
```

**Key Concepts:**
- React synthetic events
- useState for managing state
- preventDefault() for controlling default browser behavior
- Client-side routing with react-router-dom

## Routing Demo

### Static Route
- Accessible at `/static`.
- Displays a simple static page with predefined content.
- Shows how to implement and navigate to a fixed route in React.

### Dynamic Route
- Accessible at `/dynamic/:id` (example: `/dynamic/101`).
- Reads a dynamic URL parameter using `useParams`.
- Demonstrates rendering different content based on route parameters.
- Example: `/dynamic/101` displays `Dynamic Route Parameter: 101`.
## Advantages of React Routing

React Router provides a robust and flexible way to manage navigation in single-page applications. Key advantages include:

- Single Page Authentication Support

- Dynamic Routing

- Nested Routes

- Protected Routes

- Declarative Syntaxes

- Integration with State Management

- Cross-Browser Compatibility. 


## Forms Demo (Controlled Components)

- Inputs are controlled via React state (`useState`).
- Handles **form submission** with `onSubmit`.
- Validates user input:
  - Name is required.
  - Email is required and must be valid.
- Displays error messages for invalid inputs.
- Uses `preventDefault()` to stop page reload on submit.
- Clears form and shows an alert when submission is successful.

### Access
- Navigate to `/form` to see the demo in action.

## REST API; integration of the weatherAPI. 
REST api - 1. Representational State Transfer, 2.dynamic data fetching and manipulation.

response format- .json
fetching data - useEffect and useState. 

### 1. Fetching Data from Weather API
- Users enter a city in a controlled form.
- On submission, a GET request is sent to the weather API:

```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
  .then(res => {
    if(!res.ok) throw new Error("City not found");
    return res.json();
  })
  .then(data => setWeather(data))
  .catch(err => setError(err.message));
```

## Preventing default behaviour - preventDefault()
## using hooks- useState(), useEffect(), useMemo(), useRef().

## UNIT TESTING IN REACT:
Unit testing in React focuses on verifying that individual components of an application works correctly or not.
Testing frameworks;:
+ JEST - often used with react provides a test runner, assertion library and mocking capabilities. 
+ VITEST - A newer testing framework designed for speed, especially when used with vite.