
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";


let title = (
    <h1>
        BEST REACT COURSE
    </h1>
)

//functional component
const HeadingComponent = ()=>{
return (
    <div>
    {title}
        <h2>
            namaste react
        </h2>
    </div>
)
}
const root = createRoot(document.getElementById('root'));

root.render(<HeadingComponent />)

