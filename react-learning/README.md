## Event Handling Demo
- **Button Click:** Increments a counter on each click.
- **Form Submission:** Handles submit with `preventDefault()` to avoid page reload.
- **Routing:** Accessible via `/events` using React Router.

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
