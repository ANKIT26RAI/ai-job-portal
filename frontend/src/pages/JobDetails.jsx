import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import Layout from "../components/Layout";
import { toast } from "react-toastify";

function JobDetails() {

  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {

    try {

      const res = await API.get(`/jobs/${id}`);

      setJob(res.data);

    } catch {

      toast.error("Failed to load job");

    }

  };

  const applyJob = async () => {

    try {

      await API.post("/applications/apply", {
        jobId: id
      });

      toast.success("Application submitted");

    } catch {

      toast.error("Already applied or error");

    }

  };

  if (!job) {
    return (
      <Layout>
        <p className="text-center text-gray-500">Loading job...</p>
      </Layout>
    );
  }

  return (
    <Layout>

      <div className="bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-3">
          {job.title}
        </h1>

        <p className="text-gray-600 mb-1">
          {job.company}
        </p>

        <p className="text-gray-500 mb-6">
          {job.location}
        </p>

        <hr className="mb-6"/>

        <h2 className="text-xl font-semibold mb-2">
          Job Description
        </h2>

        <p className="text-gray-700 mb-6">
          {job.description || "No description provided"}
        </p>

        <button
          onClick={applyJob}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Apply Now
        </button>

      </div>

    </Layout>
  );
}

export default JobDetails;