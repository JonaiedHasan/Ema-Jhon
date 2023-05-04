import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import './Blog.css'
const Blog = () => {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div className='container'>
      <div>
        <>
          <div className='question ps-4 border border-primary border-2  rounded p-2  mt-2 w-75 '>
            <h2 className='fw-bolder'
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              1:When should you use context API?
            </h2>
          </div>
          <Collapse in={open}>
            <div className='ans  border border-primary mt-1 rounded p-2' id="example-collapse-text">
              <h4>The Context API in React provides a way to share data between components without having to pass props down through every level of the component tree. It's particularly useful when you have data that needs to be accessed by many components, such as application-wide settings or user authentication status.

                By using the Context API, you can avoid prop-drilling and make your code more concise and easier to maintain. Instead of passing the same props down through every level of the component tree, you can store the data in a context object and access it wherever you need it.
              </h4>
            </div>
          </Collapse>
        </>
        <br />
        <>
          <div className='question ps-4 border border-primary border-2  rounded p-2  mt-1 w-75 '>
            <h2 className='fw-bolder'
              onClick={() => setOpen2(!open2)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
            >
              2:What is a custom hook?
            </h2>
          </div>
          <Collapse in={open2}>
            <div className='ans  border border-primary mt-1 rounded p-2' id="example-collapse-text">
              <h4>In React, a custom hook is a function that you create to reuse logic between components. Custom hooks are made by combining built-in React hooks with other JavaScript code to provide the desired functionality. Custom hooks typically have a specific purpose, such as handling form input or fetching data from an API. Custom hooks follow a naming convention of using the "use" prefix.
              </h4>
            </div>
          </Collapse>
        </>
        <br />
        <>
          <div className='question ps-4 border border-primary border-2  rounded p-2  mt-1 w-75 '>
            <h2 className='fw-bolder'
              onClick={() => setOpen3(!open3)}
              aria-controls="example-collapse-text"
              aria-expanded={open3}
            >
              3:What is useRef?
            </h2>
          </div>
          <Collapse in={open3}>
            <div className='ans  border border-primary mt-1 rounded p-2' id="example-collapse-text">
              <h4>In React, useRef is a hook that returns a mutable ref object which can be used to store a value or reference to a DOM element between renders, without triggering a re-render. It provides a way to access and manipulate the actual DOM elements or other underlying objects directly, rather than going through React's virtual DOM. Additionally, it can be used to maintain state across renders, which is useful in certain cases where you need to access a value or DOM element outside of the normal component lifecycle.
              </h4>
            </div>
          </Collapse>
        </>
        <br />
        <>
          <div className='question  ps-4 border border-primary border-2  rounded p-2  mt-1 w-75 '>
            <h2 className='fw-bolder'
              onClick={() => setOpen4(!open4)}
              aria-controls="example-collapse-text"
              aria-expanded={open4}
            >
              4.What is useMemo?
            </h2>
          </div>
          <Collapse in={open4}>
            <div className='ans  border border-primary mt-1 rounded p-2' id="example-collapse-text">
              <h4> In React, useMemo is a hook that allows you to memoize a value or a function so that it's only recomputed when one of its dependencies has changed. It's similar to useCallback, which memoizes a function, but useMemo is used for memoizing a value.

                By using useMemo, you can avoid unnecessary re-calculations of a value or function, which can improve the performance of your application. It's particularly useful when dealing with expensive computations or when rendering a large number of components.</h4>
            </div>
          </Collapse>
        </>


      </div>
    </div>
  );
};

export default Blog;