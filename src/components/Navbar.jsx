import { FaBell, FaSun } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-16 bg-[#1f2d44] border-b border-slate-700 px-6 flex items-center justify-between">
      <div>
        <h1 className="text-white text-2xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-300 mt-1">
          Welcome back! Here's your organization overview.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-12 h-12 border border-slate-600 rounded-xl flex items-center justify-center text-white">
          <FaSun />
        </button>

        <div className="relative">
          <button className="w-12 h-12 border border-slate-600 rounded-xl flex items-center justify-center text-white">
            <FaBell />
          </button>

          <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>

        <div className="h-10 border-l border-slate-600"></div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#4c3b7e] flex items-center justify-center text-[#9c82ff] font-bold">
            AU
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Admin User
            </h3>

            <p className="text-slate-300 text-sm">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;