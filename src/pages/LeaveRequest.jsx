import { useState } from "react";

const LeaveRequest = () => {
  const [requests, setRequests] =
    useState([
      {
        id: 2,
        employee: "Rosalin",
        status: "Pending",
      },
      {
        id: 3,
        employee: "Alex",
        status: "Pending",
      },
      
    ]);

  const updateStatus = (
    id,
    status
  ) => {
    setRequests(
      requests.map((req) =>
        req.id === id
          ? { ...req, status }
          : req
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-white">
        Leave Requests
      </h2>

      {requests.map((req) => (
        <div
          key={req.id}
          className="bg-white p-4 shadow rounded my-3"
        >
          <p>{req.employee}</p>
          <p>{req.status}</p>

          <button
            onClick={() =>
              updateStatus(
                req.id,
                "Approved"
              )
            }
            className="bg-green-500 text-white px-3 py-1 rounded mr-2"
          >
            Approve
          </button>

          <button
            onClick={() =>
              updateStatus(
                req.id,
                "Rejected"
              )
            }
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};

export default LeaveRequest;