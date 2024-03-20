import { useNavigate,Link,BrowserRouter,Route,Routes } from "react-router-dom";
import Loginpage from "./page/loginpage";
import Home from "./page/Home";
function home()
{
    return(<>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Loginpage/>}/>
                <Route path="/Home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>

    </>);
}
export default home;