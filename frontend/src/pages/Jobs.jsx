import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import { toast } from "react-toastify";

function Jobs() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  const applyJob = async (jobId) => {

    try {

      await API.post("/applications/apply", {
        jobId: jobId
      });

     toast.success("Application submitted");

    } catch (error) {

      toast.error("Already applied to this job");
    }

  };

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Find Your Dream Job
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {jobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              applyJob={applyJob}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Jobs;