import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/dashbord/Dashboard";
import Login from "./views/auth_forms/Login";
import Signup from "./views/auth_forms/Signup";
import ResetPassword from "./views/auth_forms/ResetPassword";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/signup/*" element={<Signup />} />
        <Route path="/forgot-password/*" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
