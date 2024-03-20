import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Loginpage()
{
    const navigate = useNavigate()
    const url="http://127.0.0.1:5000"
    const [Username,setusername] =useState("")
    const [Password,setpassword] =useState("")
    const [datares,setdatares] = useState([])
    const [login,setlogin] = useState(false)
    const inputusername =(event) =>{
        setusername(event.target.value)
    }
    const inputpassword =(event) =>{
        setpassword(event.target.value)
    }

    const checkUser = () => {
        axios.get(url + "/customer/login/" + Username).then(res => {setdatares(res.data)})
        if(datares.password==Password)
        {
            navigate('/Home')
            setlogin(true)
        }
        else
        {
            alert("รหัสผิด")
        }
    };
    const movetosignup = () =>{
        navigate('/signup');
    }
    return(
        <div align="center">
                <div>
                    <label>Username</label>
                    <input type="text" onChange={inputusername}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" onChange={inputpassword}/>
                </div>
                <div>
                <input type="submit" value="LOGIN"onClick={checkUser}/>
                </div>
                <div>
                    <input type="submit" value="Sign up" onClick={movetosignup}/>
                </div>
        </div>
    );
}
export default Loginpage;