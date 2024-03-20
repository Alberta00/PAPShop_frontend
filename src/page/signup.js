import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Signuppage()
{
    const navigate = useNavigate()
    const url="http://127.0.0.1:5000"
    const [Username,setusername] =useState("")
    const [Password,setpassword] =useState("")
    const [Email,setemail] =useState("")
    const [ID,setid] =useState("")
    const [login,setlogin] = useState(false)
    const inputusername =(event) =>{
        setusername(event.target.value)
    }
    const inputpassword =(event) =>{
        setpassword(event.target.value)
    }
    const inputemail =(event) =>{
        setemail(event.target.value)
    }
    const inputid =(event) =>{
        setid(event.target.value)
    }
    const signupdata = () => {
        const datauser = {
            _id : ID,
            username : Username,
            password : Password,
            email : Email
        }
        axios.post(url+"/customer/signup",datauser).then(res => {
            if(res.data.login)
            {
                navigate('/Home')
            }
            else
            {
                alert("มีผู้ใช้แล้ว")
            }})
    }
    return(
        <div align="center">
                <div>
                    <label>ID</label>
                    <input type="text" onChange={inputid}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={inputemail}/>
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" onChange={inputusername}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" onChange={inputpassword}/>
                </div>
                <div>
                    <input type="submit" value="Sign up" onClick={signupdata}/>
                </div>
        </div>
    )
}
export default Signuppage;