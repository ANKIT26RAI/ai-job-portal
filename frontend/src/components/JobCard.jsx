import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function JobCard({ job, applyJob }) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/jobs/${job._id}`)}
      className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer border"
    >

      <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
        {job.title}
      </h2>

      <div className="flex items-center gap-2 text-gray-600 mb-1">
        <FaBuilding />
        {job.company}
      </div>

      <div className="flex items-center gap-2 text-gray-500 mb-4">
        <FaMapMarkerAlt />
        {job.location}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();   // prevents card click navigation
          applyJob(job._id);
        }}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
      >
        Apply Now
      </button>

    </div>
  );
}

export default JobCard;