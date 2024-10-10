
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/dashboard/Admindashboard";
import TeacherDashboard from "./pages/dashboard/Teacherdashboard";
import StudentDashboard from "./pages/dashboard/Studentdashboard";
import AddCourse from "./componets/AddCourse";
import EditCourse from "./componets/EditCourse";
import Header from "./componets/Header";
import { AuthProvider } from "./componets/AuthProvider ";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); 

  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setIsAdmin(role === "admin");
  };

  return (
    <Router>
      <AuthProvider>
        <AppRoutes isAuthenticated={isAuthenticated} onLogin={handleLogin} isAdmin={isAdmin} />
      </AuthProvider>
    </Router>
  );
}

function AppRoutes({ isAuthenticated, onLogin, isAdmin }) {
  const location = useLocation();

  const shouldShowHeader = !["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header isAdmin={isAdmin} />} {/* Pass isAdmin to Header */}
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/home" : "/login"} />}
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/editcourse" element={<EditCourse />} />
        <Route path="/addcourse" element={<AddCourse />} />
      </Routes>
    </>
  );
}

export default App;
