import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import MyApplications from "./pages/MyApplications";
import ProtectedRoute from "./components/ProtectedRoute";
import JobDetails from "./pages/JobDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/applications" element={<MyApplications />} />
      <Route path="/jobs"element={ <ProtectedRoute><Jobs /></ProtectedRoute> }/>
<Route path="/jobs/:id" element={<JobDetails />} />      </Routes>
  );
}

export default App;