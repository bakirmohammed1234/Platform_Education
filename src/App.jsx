import NavBar from "./pages/NavBar";
import Courses from "./pages/courses/Courses";
import Footer from "./Footer";
import Login from "./pages/login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import useAuth from './hooks/useAuth';
import PostCourse from "./pages/postCourse/PostCourse";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Examens from "./pages/examens/Examens";
import PostExamen from "./pages/postCourse/PostExamen";
import Exercices from "./pages/exercices/Exercices";
import PostExercice from "./pages/postCourse/PostExercice";
function App() {
  const PrivateRoute = ({ element }) => {
    const { currentUser } = useAuth();
    return currentUser ? element : <Navigate to="/login" />;
  };

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ background: "#f8f9fa" }} // facultatif : couleur claire de fond
    >
      <NavBar />

      <main className="flex-grow-1">
        <Routes>Examens
          <Route path="/courses" element={<Courses titre="historique"/>} />
          <Route path="/geographique" element={<Courses titre="geographique"/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/examens" element={<Examens />} />
          <Route path="/exercices" element={<Exercices />} />
          <Route path="/course" element={<PrivateRoute element={<PostCourse />} />} />
          <Route path="/examen" element={<PrivateRoute element={<PostExamen />} />} />
          <Route path="/exercice" element={<PrivateRoute element={<PostExercice />} />} />
          
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
