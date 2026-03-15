import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../components/Layout";

function MyApplications() {

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {

    try {

      const res = await API.get("/applications/my");

      setApplications(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return (
      <Layout>
        <p className="text-center text-gray-500">Loading applications...</p>
      </Layout>
    );
  }

  return (
    <Layout>

      <h1 className="text-3xl font-bold mb-6">
        My Applications
      </h1>

      {applications.length === 0 ? (

        <div className="bg-white p-10 rounded-lg shadow text-center">

          <p className="text-gray-500 text-lg">
            You haven't applied to any jobs yet.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-6">

          {applications.map((app) => (

            <div
              key={app._id}
              className="bg-white p-6 rounded-lg shadow border"
            >

              <h2 className="text-xl font-semibold">
                {app.job.title}
              </h2>

              <p className="text-gray-600">
                {app.job.company}
              </p>

              <p className="text-gray-500 mb-3">
                {app.job.location}
              </p>

              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm">
                Status: {app.status}
              </span>

            </div>

          ))}

        </div>

      )}

    </Layout>
  );
}

export default MyApplications;