import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/dashboard/Admindashboard"; 
import TeacherDashboard from "./pages/dashboard/Teacherdashboard"; 
import StudentDashboard from "./pages/dashboard/Studentdashboard"; 
import Headers from "./componets/Header";
import EditCourse from "./componets/EditCourse";
import AddCourse from "./componets/AddCourse";
// import { AuthProvider } from "./componets/AuthProvider ";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Headers />
      {/* <AuthProvider> */}
      <Routes>
        {/* <Route
            path="/"
            element={<Navigate to={isAuthenticated ? "/home" : "/login"} />}
          /> */}
        {/* <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          /> */}
        {/* <Route path="/login" element={<Login onLogin={handleLogin} />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/editcourse" element={<EditCourse />} />
        <Route path="/addcourse" element={<AddCourse />} />
      </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
