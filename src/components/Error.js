import { useRouteError } from "react-router-dom"

const Error =()=>{
    let err= useRouteError()
    console.log(err)
    return (
        <div>
           <h1>
            Opps! Something went wrong
            </h1> 
            <h2>
            Status : {err.status} , 
            Error :{err.statusText}
            </h2>
        </div>
    )
}

export default Error