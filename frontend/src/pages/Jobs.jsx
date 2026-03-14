import { useEffect, useState } from "react";
import API from "../services/api";

function Jobs() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl mb-6">Available Jobs</h1>

      {jobs.map((job) => (
        <div key={job._id} className="border p-4 mb-4 rounded">

          <h2 className="text-xl font-bold">{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>

        </div>
      ))}

    </div>
  );
}

export default Jobs;