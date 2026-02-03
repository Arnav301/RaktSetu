type Stat = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
};

const stats: Stat[] = [
  {
    title: "Total Blood Units",
    value: "264",
    change: "+12% from last month",
    positive: true,
  },
  {
    title: "Registered Donors",
    value: "1,847",
    change: "+8% from last month",
    positive: true,
  },
  {
    title: "Pending Requests",
    value: "23",
    change: "-5% from last month",
    positive: false,
  },
  {
    title: "Donations This Month",
    value: "156",
    change: "+18% from last month",
    positive: true,
  },
];

export default function StatsCards() {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white p-6 rounded-xl shadow-sm border"
        >
          <p className="text-gray-500 text-sm">{stat.title}</p>
          <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>
          <p
            className={`mt-2 text-sm font-medium ${stat.positive ? "text-green-600" : "text-red-500"}`}
          >
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}
