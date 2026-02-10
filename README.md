## Solanki's Kitchen Food App

- Header
  - Logo
  - Nav Items
- Body
  - Search
  - Restaurant Container
    - Restaurant Card
- Footer
  - Copyright
  - Links

# Ep : 5

- Event Handler
- React Hooks
  - Normal JS Utility Functions
    - useState() = Superpowerful State Variables in React
      - Whenever State Variable changes, React Re-Rander the component
    - useEffect()

======================================================================================

# Notes

- Passing props to a component is like passing arguments to function
- React uses Reconciliation Algoritham, (Works with React Fiber)
- Actual DOM are tags,
- Virtual DOM are representation of Actual DOM, it is a JavaScript Object
- In React 16, a new algorithem came which called React Fiber
- Homework - analysis
  - React Fiber
  - Incremental Rendering
  - Virtual DOM is old concept, and React used it and design framework around this

# useEffect() hook

- useEffect having 2 arguments,
  - 1 is callback function,
  - 2nd is dependency array
- useEffect called after every time component renders
- Dependency array changes the behaviour of it's render
  - If no Dependency Array passed, useEffect is called on every render
  - If Dependency Array passed empty ([]), useEffect is called on initial render (just once)
  - If Dependency Array having values, useEffect is called everytime when values got updated

# React Router

- install : npm i react-router-dom
- createBrowserRouter :
  - To add path and element for each routes
  - syntax :
    - createBrowserRouter([
      {
      path: "/",
      element: <AppLayout />
      },
      ]);
- Two Types of Routing
  - Server Side Routing
  - Client Side Routing
