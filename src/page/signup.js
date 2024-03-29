import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../pagecss/signup.css';
function Signuppage()
{
    const navigate = useNavigate()
    const url="http://10.64.43.33:5000"
    const [Username,setusername] =useState("")
    const [Password,setpassword] =useState("")
    const [Email,setemail] =useState("")
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
    const signupdata = () => {
        const datauser = {
            _id : Username,
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
        <div align="center" id="main">
                <div id="headsignup">
                    <label>Sign in</label>
                </div>
                <div>
                    <div>
                        <label>Email</label>
                    </div>
                    <input className="signup" type="text" onChange={inputemail}/>
                </div>
                <div>
                    <div>
                        <label>Username</label>
                    </div>
                    <input className="signup" type="text" onChange={inputusername}/>
                </div>
                <div>
                    <div>
                        <label>Password</label>
                    </div>
                    <input className="signup" type="text" onChange={inputpassword}/>
                </div>
                <div>
                    <input className="signup" type="submit" value="Submit" onClick={signupdata}/>
                </div>
        </div>
    )
}
export default Signuppage;