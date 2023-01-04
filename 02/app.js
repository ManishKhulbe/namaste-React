
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import {Header} from './components/header'


const HeadingComponent = ()=>{
return ( 
    <Header />
)
}
const root = createRoot(document.getElementById('root'));

root.render(<HeadingComponent />)

