import { useParams } from "react-router-dom";

const UserInfo =() => {

    const {userId} = useParams()        
    
    

    return (
        <div>
        <h1>{userId}</h1>
        </div>
        )
}

export default UserInfo ;