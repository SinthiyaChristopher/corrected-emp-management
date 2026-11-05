import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const departmentData = [
  { name: "IT", employees: 3 },
  { name: "HR", employees:2},
  { name: "Finance", employees: 3 },
  { name: "Banking", employees: 2 },
  { name: "Marketing", employees: 1 },
  { name: "Medicine", employees: 1 },
];

const distributionData = [
  { name: "IT", value: 3 },
  {name: "HR", value:2},
  { name: "Finance", value: 3 },
  { name: "Banking", value: 2 },
  { name: "Marketing", value: 1 },
  { name: "Medicine", value: 1 },
];

const COLORS = [
  "#6366f1",
  "#f59e0b",
  "#ec4899",
  "#22c55e",
  "#3b82f6",
  "blue",
];

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">

      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">
          Dashboard Overview
        </h1>

        <p className="text-slate-400 mt-1">
          Here's what's happening in your organization.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-[#1e293b] p-5 rounded-2xl border border-slate-700">
          <h4 className="text-slate-400 text-sm">
            Total Employees
          </h4>

          <h2 className="text-3xl font-bold text-white mt-3">
            12
          </h2>

                  </div>

        <div className="bg-[#1e293b] p-5 rounded-2xl border border-slate-700">
          <h4 className="text-slate-400 text-sm">
            Active Employees
          </h4>

          <h2 className="text-3xl font-bold text-white mt-3">
            9
          </h2>

          
        </div>

        <div className="bg-[#1e293b] p-5 rounded-2xl border border-slate-700">
          <h4 className="text-slate-400 text-sm">
            Departments
          </h4>

          <h2 className="text-3xl font-bold text-white mt-3">
            5
          </h2>

          
        </div>

        <div className="bg-[#1e293b] p-5 rounded-2xl border border-slate-700">
          <h4 className="text-slate-400 text-sm">
            Pending Leaves
          </h4>

          <h2 className="text-3xl font-bold text-white mt-3">
            2
          </h2>

          <p className="text-orange-400 text-sm mt-2">
            Awaiting approval
          </p>
        </div>

      </div>
{/* Charts Section */}
<div className="grid lg:grid-cols-3 gap-6 mt-8">

      <div className="lg:col-span-2 bg-[#1e293b] p-5 rounded-2xl border border-slate-700">

  <h2 className="text-lg font-semibold text-white">
    Department Overview
  </h2>

  <p className="text-slate-400 text-sm mb-4">
    Employees by department
  </p>

  <div className="h-[250px]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={departmentData}>

        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#334155"
        />

        <XAxis
          dataKey="name"
          stroke="#94a3b8"
        />

        <YAxis
          stroke="#94a3b8"
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#1e293b",
            border: "1px solid #334155",
          }}
        />

        <Line
          type="monotone"
          dataKey="employees"
          stroke="#8b5cf6"
          strokeWidth={4}
          dot={{
            r: 5,
            fill: "#8b5cf6",
          }}
          activeDot={{
            r: 8,
            fill: "#ffffff",
          }}
        />

      </LineChart>
    </ResponsiveContainer>
  </div>

</div>

        {/* Donut Chart */}
        <div className="bg-[#1e293b] p-5 rounded-2xl border border-slate-700">

          <h2 className="text-lg font-semibold text-white">
            Employee Distribution
          </h2>

          <p className="text-slate-400 text-sm mb-4">
            Department contribution
          </p>

          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  dataKey="value"
                  innerRadius={35}
                  outerRadius={60}
                >
                  {distributionData.map((item, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            {distributionData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs text-slate-300"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: COLORS[index],
                  }}
                ></div>

                {item.name} ({item.value})
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Employee Table */}
      <div className="mt-8 bg-[#1e293b] rounded-2xl border border-slate-700 p-5">

        <h2 className="text-xl font-semibold text-white mb-4">
          Recently Added Employees
        </h2>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700 text-slate-400">
              <th className="text-left py-3">
                Employee
              </th>

              <th className="text-left py-3">
                Department
              </th>

              <th className="text-left py-3">
                Role
              </th>

              <th className="text-left py-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-slate-700">
              <td className="py-4 text-white">
                Allena
              </td>

              <td className="text-slate-300">
                Marketing
              </td>

              <td className="text-slate-300">
                Senior sales Executive
              </td>

              <td>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                  Active
                </span>
              </td>
            </tr>

            <tr>
              <td className="py-4 text-white">
                Arleth
              </td>

              <td className="text-slate-300">
                Medicine
              </td>

              <td className="text-slate-300">
                sales Representative
              </td>

              <td>
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs">
                  Active
                </span>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
};

export default Dashboard;