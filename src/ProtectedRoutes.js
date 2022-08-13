import { Navigate, Outlet } from "react-router-dom";
import Login from "./Pages/Login";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login/>;
};

export default ProtectedRoutes;