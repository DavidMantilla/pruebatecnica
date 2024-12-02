import { Navigate, Outlet } from "react-router-dom";
import { validate } from "./api/login.api";

export const ProtectedRoute = async () => {
  try {
    const res = await validate();
    if (res.status == 200) {
      return <Outlet />;
    }
  } catch (error) {
    console.log(error.response.data.message);

    return <Navigate to="/" replace />;
  }

  //    if(validate)
  //
  //   else
};
