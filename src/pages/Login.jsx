import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import axios from "axios";

const Login = () => {
    const url = "localhost:8080";

    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = document.forms["login_form"];

        const formData = {
            email: form["email"].value,
            password: form["password"].value,
        };

        axios.post(`${url}/api/login`, formData);
    }
    
    const handleLogin = () => {
      setToken("this is a test token");
      navigate("/", { replace: true });
    };
  
    return <div className="bg-slate-400 min-h-screen h-full flex">
        <div className="bg-white w-8/12 px-4 py-3 mx-auto my-5 shadow-xl">
            <p className="font-bold text-2xl text-center px-6">Login</p>

            <form onSubmit={handleSubmit} name="login_form">
                <div>
                    <p>Email</p>
                    <input type="email" name="email" className="border border-slate-400" required />
                    <p>Password</p>
                    <input type="password" name="password" className="border border-slate-400" required />

                    
                </div>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    </div>;
};
  
  export default Login;
  