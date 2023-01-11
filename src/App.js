
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body'

const HeadingComponent = ()=>{
return ( 
    <React.Fragment>
        <Header />
        <Body  />
    </React.Fragment>
)
}
const root = createRoot(document.getElementById('root'));

root.render(<HeadingComponent />)

