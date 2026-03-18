import React from "react";

const dashboard = () => {
  // Sample data for demonstration
  const playerData = {
    personalInfo: {
      studentName: "Rahul Sharma",
      dateOfBirth: "2015-08-12",
      gender: "Male",
      schoolClub: "Delhi Public School",
      schoolAddress: "Sector 12, RK Puram, New Delhi",
      contactNumber: "+91 9876543210",
      whatsapp: "+91 9876543210",
      aadhaar: "1234 5678 9012",
      email: "rahul.sharma@email.com",
      photograph: "/sample-photo.jpg",
      dateOfJoining: "2024-01-15",
      hearAbout: "Social Media"
    },
    sportsInfo: {
      selectedSport: "Cricket",
      location: "Ranchi"
    },
    packageInfo: {
      selectedPackage: "Player Development Program",
      amount: "₹599"
    },
    parentInfo: {
      fatherName: "Mr. Rajesh Sharma",
      occupation: "Private Sector",
      fatherContact: "+91 9988776655",
      email: "rajesh.sharma@email.com",
      fullAddress: "House No. 45, Block C, Green Park",
      landmark: "Near Community Center",
      pincode: "110016"
    }
  };

  // Stats cards data - removed payment stats
  const stats = {
    totalAdmissions: 156,
    todayAdmissions: 8,
    activePlayers: 144,
    locations: 3
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Player Admission Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">View and manage all player registration details</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            New Admission
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Export Data
          </button>
        </div>
      </div>

      {/* Stats Cards - Updated with admission-only stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Admissions</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{stats.totalAdmissions}</h3>
            </div>
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">↑ 12% from last month</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Today's Admissions</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{stats.todayAdmissions}</h3>
            </div>
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">As of 10:30 AM</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Active Players</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{stats.activePlayers}</h3>
            </div>
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Currently enrolled</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Locations</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{stats.locations}</h3>
            </div>
            <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Ranchi, Hazaribagh, Gaya</p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, contact, or Aadhaar number..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>All Sports</option>
              <option>Cricket</option>
              <option>Football</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>All Locations</option>
              <option>Ranchi</option>
              <option>Hazaribagh</option>
              <option>Gaya</option>
            </select>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Player Details Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Card Header with Tabs */}
        <div className="border-b border-gray-100 px-6 py-4 bg-gray-50/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-700 font-bold text-lg">RS</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{playerData.personalInfo.studentName}</h2>
                <p className="text-sm text-gray-500">Player ID: #ADM-2024-001</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                Active
              </span>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Edit
              </button>
              <button className="px-3 py-1.5 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                View Full Profile
              </button>
            </div>
          </div>
        </div>

        {/* Card Body - Grid Layout */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Personal Information Section - Takes full width now */}
            <div className="lg:col-span-3 space-y-6">
              {/* Personal Info Grid */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-green-500 rounded-full"></span>
                  Personal Information
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-400">Date of Birth</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.personalInfo.dateOfBirth}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Gender</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.personalInfo.gender}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Date of Joining</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.personalInfo.dateOfJoining}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Heard About Us</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.personalInfo.hearAbout}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">School/Club</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.personalInfo.schoolClub}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Contact Number</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.personalInfo.contactNumber}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">WhatsApp</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.personalInfo.whatsapp}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Aadhaar Number</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.personalInfo.aadhaar}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.personalInfo.email}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-400">School Address</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.personalInfo.schoolAddress}</p>
                  </div>
                </div>
              </div>

              {/* Sports & Package Info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                  Sports & Package Details
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-400">Selected Sport</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.sportsInfo.selectedSport}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.sportsInfo.location}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Package</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.packageInfo.selectedPackage}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Package Amount</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.packageInfo.amount}</p>
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-purple-500 rounded-full"></span>
                  Parent/Guardian Details
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-400">Father's Name</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.parentInfo.fatherName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Occupation</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.parentInfo.occupation}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Contact</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.parentInfo.fatherContact}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.parentInfo.email}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-400">Address</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.parentInfo.fullAddress}, {playerData.parentInfo.landmark}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">PIN Code</p>
                    <p className="text-sm font-medium text-gray-700">{playerData.parentInfo.pincode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Registration Info */}
        <div className="border-t border-gray-100 px-6 py-4 bg-gray-50/50">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-500">Registration Date:</span>
            <span className="text-gray-700 font-medium">{playerData.personalInfo.dateOfJoining}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-500">Registration Source:</span>
            <span className="text-gray-700 font-medium">{playerData.personalInfo.hearAbout}</span>
          </div>
        </div>
      </div>

      {/* Recent Admissions Table */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-700">Recent Admissions</h3>
          <button className="text-sm text-green-600 hover:text-green-700 font-medium">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-3 text-left">Player Name</th>
                <th className="px-6 py-3 text-left">Date of Joining</th>
                <th className="px-6 py-3 text-left">Sport</th>
                <th className="px-6 py-3 text-left">Package</th>
                <th className="px-6 py-3 text-left">Location</th>
                <th className="px-6 py-3 text-left">Contact</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-3 font-medium">Rahul Sharma</td>
                <td className="px-6 py-3">2024-01-15</td>
                <td className="px-6 py-3">Cricket</td>
                <td className="px-6 py-3">Player Development</td>
                <td className="px-6 py-3">Ranchi</td>
                <td className="px-6 py-3">+91 9876543210</td>
                <td className="px-6 py-3">
                  <button className="text-green-600 hover:text-green-700">View</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-3 font-medium">Priya Singh</td>
                <td className="px-6 py-3">2024-01-14</td>
                <td className="px-6 py-3">Football</td>
                <td className="px-6 py-3">Skill Assessment</td>
                <td className="px-6 py-3">Hazaribagh</td>
                <td className="px-6 py-3">+91 9988776655</td>
                <td className="px-6 py-3">
                  <button className="text-green-600 hover:text-green-700">View</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-3 font-medium">Amit Kumar</td>
                <td className="px-6 py-3">2024-01-14</td>
                <td className="px-6 py-3">Cricket</td>
                <td className="px-6 py-3">Player Development</td>
                <td className="px-6 py-3">Ranchi</td>
                <td className="px-6 py-3">+91 9876512345</td>
                <td className="px-6 py-3">
                  <button className="text-green-600 hover:text-green-700">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default dashboard;