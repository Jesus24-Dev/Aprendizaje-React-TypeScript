import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import CourseDetails from "./pages/CourseDetails"
import { useAuth } from "./hooks/useAuth"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  const {isAuthenticated, login, logout} = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home login={login}/>} />
      <Route path="/courses" element={ 
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Courses logout={logout}/>
        </ProtectedRoute>
      }/>
      <Route path="/courses/:id" element={ 
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <CourseDetails />
        </ProtectedRoute>
      }/>
    </Routes>
  )
}

export default App
