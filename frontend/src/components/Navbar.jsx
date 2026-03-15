import { Link, useNavigate } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <FaBriefcase />
          AI Job Portal
        </div>

        <div className="flex items-center gap-8 text-gray-700">

          <Link className="hover:text-blue-600" to="/jobs">
            Jobs
          </Link>

          <Link className="hover:text-blue-600" to="/applications">
            My Applications
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Navbar;