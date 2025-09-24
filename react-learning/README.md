## Event Handling Demo

The event handling page demonstrates **React event handling**:

- **Button Click:** Increments a counter on each click.
- **Form Submission:** Handles submit with `preventDefault()` to avoid page reload.
- **Routing:** Accessible via `/events` using React Router.

**Key Concepts:**
- React synthetic events
- useState for managing state
- preventDefault() for controlling default browser behavior
- Client-side routing with react-router-dom

## Routing Demo

This section demonstrates **React Router** with both static and dynamic routes.

### Static Route
- Accessible at `/static`.
- Displays a simple static page with predefined content.
- Shows how to implement and navigate to a fixed route in React.

### Dynamic Route
- Accessible at `/dynamic/:id` (example: `/dynamic/101`).
- Reads a dynamic URL parameter using `useParams`.
- Demonstrates rendering different content based on route parameters.
- Example: `/dynamic/101` displays `Dynamic Route Parameter: 101`.
