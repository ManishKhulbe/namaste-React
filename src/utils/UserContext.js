import { createContext } from "react";

const UserContext = createContext({
    user :{
        name : "manish Khulbe",
        email :'manishkhulbe123@gmail.com'
    }
})

UserContext.displayName="userContext"
export default UserContext