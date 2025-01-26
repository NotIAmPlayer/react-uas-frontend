import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Login = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
  
    /*
    const handleLogin = () => {
      setToken("this is a test token");
      navigate("/", { replace: true });
    };
    */
  
    return <div className="bg-slate-400 min-h-screen h-full flex">
        <div className="bg-white w-8/12 px-4 py-3 mx-auto my-5 shadow-xl">
            <p className="font-bold text-2xl text-center px-6">Login</p>

            <form onSubmit={handleSubmit} name="login_form">
                <div>
                    <p>Email</p>
                    <input type="email" name="email" />
                </div>
            </form>
        </div>
    </div>;
};
  
  export default Login;
  