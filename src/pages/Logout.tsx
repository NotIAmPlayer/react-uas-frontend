import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 1 * 1000);

  return <></>;
};

export default Logout;
