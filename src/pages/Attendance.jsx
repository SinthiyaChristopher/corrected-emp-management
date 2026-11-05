const attendanceData = [
  {
    id: 1,
    name: "Sinthiya",
    empId: "EMP001",
    date: "2026-11-05",
    checkIn: "09:00",
    checkOut: "18:00",
    status: "Present",
  },
  {
    id: 2,
    name: "Allena",
    empId: "EMP002",
    date: "2026-11-05",
    checkIn: "09:15",
    checkOut: "18:00",
    status: "Late",
  },
  {
    id: 3,
    name: "Arleth",
    empId: "EMP003",
    date: "2026-11-05",
    checkIn: "-",
    checkOut: "-",
    status: "Absent",
  },
  {
    id: 4,
    name: "Navin",
    empId: "EMP005",
    date: "2026-11-05",
    checkIn: "08:55",
    checkOut: "18:10",
    status: "Present",
  },
];

const attendanceRate = 90;

const Attendance = () => {
  return (
    <div className="p-6 bg-slate-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-5">
        Attendance Summary
      </h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 text-black p-5 rounded-lg">
          Present Today : 9
        </div>

        <div className="bg-red-100 text-black p-5 rounded-lg">
          Absent Today : 3
        </div>

        <div className="bg-blue-100 text-black p-5 rounded-lg">
          Average Attendance : 90%
        </div>
      </div>

      {/* Attendance Rate */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-1/4">
            <h2 className="text-xl font-semibold">
              Attendance Rate
            </h2>

            <p className="text-gray-400 text-sm">
              Present employees among filtered records
            </p>
          </div>

          <div className="flex-1 flex items-center gap-4 w-full">
            <div className="w-full bg-slate-700 rounded-full h-3">
              <div
                className="bg-violet-500 h-3 rounded-full"
                style={{ width: `${attendanceRate}%` }}
              ></div>
            </div>

            <span className="text-3xl font-bold text-violet-400">
              {attendanceRate}%
            </span>
          </div>
        </div>
      </div>

      {/* Daily Attendance Records */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold">
            Daily Attendance Records
          </h2>

          <div className="flex gap-3">
            <input
              type="date"
              className="bg-slate-700 border border-slate-600 px-4 py-2 rounded-lg text-white"
            />

            <select className="bg-slate-700 border border-slate-600 px-4 py-2 rounded-lg text-white">
              <option>All Statuses</option>
              <option>Present</option>
              <option>Late</option>
              <option>Absent</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-700 text-left">
                <th className="p-4">Employee</th>
                <th className="p-4">Date</th>
                <th className="p-4">Check In</th>
                <th className="p-4">Check Out</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {attendanceData.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-b border-slate-700"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-violet-700 flex items-center justify-center font-bold">
                        {employee.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-semibold">
                          {employee.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {employee.empId}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">{employee.date}</td>
                  <td className="p-4">{employee.checkIn}</td>
                  <td className="p-4">{employee.checkOut}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        employee.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : employee.status === "Late"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;