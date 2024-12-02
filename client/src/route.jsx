import { Navigate, Outlet } from "react-router-dom";
import { validate } from "./api/login.api"; 

export const ProtectedRoute = async () => {
  
   let val= await validate()
  console.log(val);
  
//    if(validate)
//   return <Navigate to="/" replace />;
//   else
  return <Outlet />;
};