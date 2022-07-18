import {Link} from "react-router-dom";
import { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
const Main = () => {

    const navigate= useNavigate() // bu özellikle useNavigate ile yani input icine hasan yazdigimizda contact kismina bagladigimiz icin hasan yazildiginda contact yazisi ekranda cikiyor. 
    const [term, setTerm] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(term == 'hasan'){
            navigate('/');
        }else{
            alert('Wrong name!')
        }
        setTerm ('')
    }
    return(
        <div>
       <h1> Main</h1>
       {/* <Link to ='/contact'> Go to Contact </Link>
       <br/>
       <Link to = '/about-us'> Go to About Us </Link> */}
        {/* <NavLink to ='/contact'> Go to Contact </NavLink>
         <br/>
         <NavLink to = '/about-us'> Go to About Us </NavLink> */}

         <form onSubmit={(handleSubmit)}>

            <input 
            type='text'
            value={term}
            onChange= {(e) => setTerm(e.target.value)}
            />
            <input
            type='submit'
            value='submit'
            />
         </form>

    </div>
    )
}

export default Main;