import React from 'react';

const Tracker = () => {
  return (
    <div className="bg-[#F3F7F5] pt-12 sm:pt-14 md:pt-16 pb-10 px-4 sm:px-6 md:px-10 font-sans min-h-screen">
      <div className="container mx-auto max-w-7xl bg-white p-4 sm:p-6 md:p-10 rounded-[2.5rem] shadow-2xl">

        {/* HEADER + CARDS + IMAGE */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[70%]">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#064E3B] mb-6">
              Welcome Back, Sarah!
            </h1>

            {/* Summary Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <SummaryCard icon="❤️" title="Heart Rate" value="78" unit="bpm" bg="bg-[#FDF2F3]" />
              <SummaryCard icon="📈" title="HRV" value="65" unit="ms" bg="bg-[#EEF6FF]" />
              <SummaryCard icon="🌙" title="Sleep" value="7h 45m" unit="last night" bg="bg-[#F4F1FF]" />
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden lg:flex justify-end w-[30%]">
            <img
              src="Tracker.jpeg"
              alt="tracker"
              className="h-64 xl:h-72 w-auto object-contain"
            />
          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Heart Rate */}
          <Card>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-[#064E3B]">Heart Rate</h3>
              <div className="text-right">
                <p className="text-4xl font-bold text-[#064E3B]">78</p>
                <p className="text-xs text-gray-400">bpm</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-sm text-gray-500">Resting</p>
                <p className="text-2xl font-bold text-[#064E3B]">62</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Peak</p>
                <p className="text-2xl font-bold text-[#064E3B]">135</p>
              </div>
            </div>

            <div className="h-32 mt-6 bg-gradient-to-t from-[#C5A059]/20 to-transparent rounded-lg"></div>
          </Card>

          {/* HRV */}
          <Card>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-[#064E3B]">HRV Analysis</h3>
              <div className="text-right">
                <p className="text-4xl font-bold text-[#064E3B]">65</p>
                <p className="text-xs text-gray-400">ms</p>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <p className="text-sm text-gray-500">Baseline</p>
              <p className="text-xl font-bold text-[#064E3B]">58 ms</p>
            </div>

            <div className="h-32 mt-6 bg-gradient-to-t from-[#064E3B]/20 to-transparent rounded-lg"></div>
          </Card>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* Sleep */}
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-xl text-[#064E3B]">Sleep Analysis</h3>
                <p className="text-3xl font-bold text-[#064E3B]">7h 45m</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                <SleepStage label="Awake" color="bg-yellow-100" value="32m" />
                <SleepStage label="REM" color="bg-blue-100" value="1h 56m" />
                <SleepStage label="Light" color="bg-green-100" value="3h 22m" />
                <SleepStage label="Deep" color="bg-emerald-100" value="1h 55m" />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs min-w-[500px]">
                  <thead>
                    <tr className="border-b">
                      {Array(8).fill("Data").map((_, i) => (
                        <th key={i} className="py-2 text-left text-gray-500">Data</th>
                      ))}
                    </tr>
                  </thead>
                </table>
              </div>
            </Card>

            {/* Recovery */}
            <Card className="bg-gradient-to-br from-[#064E3B]/5 to-[#C5A059]/5">
              <h3 className="font-bold text-xl text-[#064E3B] mb-4">Recovery Score</h3>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 space-y-4 w-full">
                  <Metric label="Sleep" value="42" unit="no" subtext="Below target" />
                  <Metric label="HRV" value="25" unit="no" subtext="Improving" />
                  <Metric label="Activity" value="15" unit="no" subtext="Rest recommended" />
                </div>

                <div className="w-36 h-36">
                  <RecoveryCircle score={82} />
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

// COMPONENTS (same logic, minor cleanups)

const Card = ({ children, className = '' }) => (
  <div className={`bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition ${className}`}>
    {children}
  </div>
);

const SummaryCard = ({ icon, title, value, unit, bg }) => (
  <div className={`flex-1 p-4 sm:p-6 rounded-2xl flex items-center gap-4 border border-gray-100 hover:shadow-lg transition ${bg}`}>
    <div className="text-3xl sm:text-4xl">{icon}</div>
    <div>
      <h4 className="text-sm text-gray-600">{title}</h4>
      <p className="text-2xl sm:text-3xl font-bold text-[#064E3B]">{value}</p>
      <p className="text-xs text-gray-400">{unit}</p>
    </div>
  </div>
);

const SleepStage = ({ label, color, value }) => (
  <div className={`${color} rounded-lg p-2 text-center`}>
    <p className="text-xs">{label}</p>
    <p className="font-bold">{value}</p>
  </div>
);

const Metric = ({ label, value, unit, subtext }) => (
  <div className="flex justify-between border-b pb-3">
    <div>
      <p>{label}</p>
      <p className="text-xs text-gray-400">{subtext}</p>
    </div>
    <div>
      <span className="font-bold text-[#064E3B]">{value}</span>
      <span className="text-xs ml-1">{unit}</span>
    </div>
  </div>
);

const RecoveryCircle = ({ score }) => {
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <svg viewBox="0 0 36 36" className="w-full h-full">
      <circle cx="18" cy="18" r={radius} stroke="#E5E7EB" strokeWidth="2.5" fill="none" />
      <circle
        cx="18"
        cy="18"
        r={radius}
        stroke="#064E3B"
        strokeWidth="2.5"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 18 18)"
      />
      <text x="18" y="20" textAnchor="middle" className="text-[8px] fill-[#064E3B] font-bold">
        {score}
      </text>
    </svg>
  );
};

export default Tracker;