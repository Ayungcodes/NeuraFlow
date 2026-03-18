import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 700 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 900 },
];

const Dashboard = () => {
  return (
    <div className="flex bg-gray-950 text-white rounded-2xl overflow-hidden border border-gray-800">
      {/* sidebar */}
      <div className="w-48 bg-gray-900 p-5 hidden md:flex flex-col gap-6">
        <h2 className="text-xl font-bold">
          Neura<span className="text-purple-500">Flow</span>
        </h2>

        <nav className="flex flex-col gap-3 text-gray-400">
          <span className="hover:text-white cursor-pointer">Dashboard</span>
          <span className="hover:text-white cursor-pointer">Analytics</span>
          <span className="hover:text-white cursor-pointer">Reports</span>
          <span className="hover:text-white cursor-pointer">AI Assistant</span>
        </nav>
      </div>

      <div className="flex-1 p-6 space-y-6">
        {/* stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">Revenue</p>
            <h3 className="text-xl font-bold">$24,200</h3>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">Users</p>
            <h3 className="text-xl font-bold">12,450</h3>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">Growth</p>
            <h3 className="text-xl font-bold text-green-400">+18%</h3>
          </div>
        </div>

        {/*chart */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="mb-4 text-lg">Analytics Overview</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888" />
              <Tooltip />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* AI panel */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="mb-3 text-lg">AI Insight</h3>

          <p className="text-gray-400 text-sm">
            Your revenue has increased by 18% this month. Consider scaling your
            highest converting channels to maximize growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
