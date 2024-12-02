import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { VisitasPage } from "./pages/VisitasPage";
import {  AdminPage} from "./pages/adminPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/navbar";
import { ProtectedRoute} from './route'
import "./css/App.css";
function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
           <Route element={<ProtectedRoute/>}>
            <Route path="/usuarios" element={<AdminPage />} />
            <Route path="/visitas" element={<VisitasPage />} />
          </Route>
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
