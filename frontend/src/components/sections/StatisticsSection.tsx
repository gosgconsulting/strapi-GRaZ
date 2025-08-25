
const StatisticsSection = () => {
  const statistics = [
    {
      number: "500+",
      label: "Students Trained",
      color: "text-violet-500",
      bgGlow: "bg-violet-100",
    },
    {
      number: "15+",
      label: "Years Experience",
      color: "text-emerald-500",
      bgGlow: "bg-emerald-100",
    },
    {
      number: "95%",
      label: "Success Rate",
      color: "text-orange-500",
      bgGlow: "bg-orange-100",
    },
    {
      number: "20+",
      label: "Awards Won",
      color: "text-rose-500",
      bgGlow: "bg-rose-100",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`relative inline-block p-4 rounded-2xl ${stat.bgGlow} transition-all duration-300 group-hover:scale-105 mb-4`}>
                    <div className={`text-4xl md:text-5xl font-bold ${stat.color} drop-shadow-lg !important`} style={{color: stat.color === 'text-violet-500' ? '#8b5cf6' : stat.color === 'text-emerald-500' ? '#10b981' : stat.color === 'text-orange-500' ? '#f97316' : '#f43f5e'}}>
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
