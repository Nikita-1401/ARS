import React, { useState } from "react";

const PaymentPage = () => {
  // Sample payment data
  const [payments, setPayments] = useState([
    {
      id: "PAY-001",
      playerName: "Rahul Sharma",
      playerId: "ADM-2024-001",
      date: "2024-01-15",
      packageType: "Player Development Program",
      packageCategory: "Admission",
      amount: 599,
      paymentMode: "UPI",
      transactionId: "TXN123456789",
      status: "Completed",
      timestamp: "10:30 AM"
    },
    {
      id: "PAY-002",
      playerName: "Priya Singh",
      playerId: "ADM-2024-002",
      date: "2024-01-14",
      packageType: "Skill Assessment Through Video",
      packageCategory: "Assessment",
      amount: 2249,
      paymentMode: "Card",
      transactionId: "TXN987654321",
      status: "Completed",
      timestamp: "3:45 PM"
    },
    {
      id: "PAY-003",
      playerName: "Amit Kumar",
      playerId: "ADM-2024-003",
      date: "2024-01-14",
      packageType: "Player Development Program",
      packageCategory: "Admission",
      amount: 599,
      paymentMode: "Net Banking",
      transactionId: "TXN456789123",
      status: "Pending",
      timestamp: "11:20 AM"
    },
    {
      id: "PAY-004",
      playerName: "Sneha Gupta",
      playerId: "ADM-2024-004",
      date: "2024-01-13",
      packageType: "Skill Assessment Through Video",
      packageCategory: "Assessment",
      amount: 2249,
      paymentMode: "Cash",
      transactionId: "CASH-001",
      status: "Completed",
      timestamp: "9:15 AM"
    },
    {
      id: "PAY-005",
      playerName: "Vikram Singh",
      playerId: "ADM-2024-005",
      date: "2024-01-13",
      packageType: "Player Development Program",
      packageCategory: "Admission",
      amount: 599,
      paymentMode: "UPI",
      transactionId: "TXN321654987",
      status: "Failed",
      timestamp: "5:30 PM"
    }
  ]);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Summary stats
  const totalRevenue = payments.reduce((sum, payment) => 
    payment.status === "Completed" ? sum + payment.amount : sum, 0
  );
  
  const admissionPayments = payments.filter(p => p.packageCategory === "Admission");
  const assessmentPayments = payments.filter(p => p.packageCategory === "Assessment");
  
  const admissionRevenue = admissionPayments
    .filter(p => p.status === "Completed")
    .reduce((sum, p) => sum + p.amount, 0);
    
  const assessmentRevenue = assessmentPayments
    .filter(p => p.status === "Completed")
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingAmount = payments
    .filter(p => p.status === "Pending")
    .reduce((sum, p) => sum + p.amount, 0);

  // Filter payments
  const filteredPayments = payments.filter(payment => {
    const matchesCategory = selectedCategory === "All" || payment.packageCategory === selectedCategory;
    const matchesStatus = selectedStatus === "All" || payment.status === selectedStatus;
    const matchesSearch = payment.playerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.playerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Payments Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Track and manage all package payments</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Record Payment
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">₹{totalRevenue}</h3>
            </div>
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">From all completed payments</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Admission Fees</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">₹{admissionRevenue}</h3>
            </div>
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">{admissionPayments.length} admissions</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Assessment Fees</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">₹{assessmentRevenue}</h3>
            </div>
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">{assessmentPayments.length} assessments</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Pending Amount</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">₹{pendingAmount}</h3>
            </div>
            <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">{payments.filter(p => p.status === "Pending").length} pending payments</p>
        </div>
      </div>

      {/* Package Category Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Admission Packages Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100/50 border-b border-blue-200">
            <h3 className="text-base font-semibold text-blue-800 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Admission Packages
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {admissionPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-semibold text-xs">{payment.playerName.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{payment.playerName}</p>
                      <p className="text-xs text-gray-500">{payment.packageType}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-800">₹{payment.amount}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        payment.status === "Completed" ? "bg-green-100 text-green-700" :
                        payment.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                        "bg-red-100 text-red-700"
                      }`}>
                        {payment.status}
                      </span>
                      <span className="text-xs text-gray-400">{payment.paymentMode}</span>
                    </div>
                  </div>
                </div>
              ))}
              {admissionPayments.length === 0 && (
                <p className="text-sm text-gray-400 text-center py-4">No admission packages</p>
              )}
            </div>
          </div>
        </div>

        {/* Assessment Packages Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-purple-50 to-purple-100/50 border-b border-purple-200">
            <h3 className="text-base font-semibold text-purple-800 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Assessment Packages
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {assessmentPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-700 font-semibold text-xs">{payment.playerName.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{payment.playerName}</p>
                      <p className="text-xs text-gray-500">{payment.packageType}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-800">₹{payment.amount}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        payment.status === "Completed" ? "bg-green-100 text-green-700" :
                        payment.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                        "bg-red-100 text-red-700"
                      }`}>
                        {payment.status}
                      </span>
                      <span className="text-xs text-gray-400">{payment.paymentMode}</span>
                    </div>
                  </div>
                </div>
              ))}
              {assessmentPayments.length === 0 && (
                <p className="text-sm text-gray-400 text-center py-4">No assessment packages</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by player name, ID or transaction ID..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select 
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Packages</option>
              <option value="Admission">Admission</option>
              <option value="Assessment">Assessment</option>
            </select>
            <select 
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-700">Transaction History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-3 text-left">Transaction ID</th>
                <th className="px-6 py-3 text-left">Player Details</th>
                <th className="px-6 py-3 text-left">Package Type</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Amount</th>
                <th className="px-6 py-3 text-left">Payment Mode</th>
                <th className="px-6 py-3 text-left">Date & Time</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 font-mono text-xs text-gray-600">
                    {payment.transactionId}
                  </td>
                  <td className="px-6 py-3">
                    <div>
                      <p className="font-medium text-gray-800">{payment.playerName}</p>
                      <p className="text-xs text-gray-400">{payment.playerId}</p>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <p className="text-gray-700">{payment.packageType}</p>
                  </td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      payment.packageCategory === "Admission" 
                        ? "bg-blue-100 text-blue-700" 
                        : "bg-purple-100 text-purple-700"
                    }`}>
                      {payment.packageCategory}
                    </span>
                  </td>
                  <td className="px-6 py-3 font-medium text-gray-800">
                    ₹{payment.amount}
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-1">
                      {payment.paymentMode === "UPI" && (
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      )}
                      {payment.paymentMode === "Card" && (
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      )}
                      {payment.paymentMode === "Cash" && (
                        <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                      {payment.paymentMode === "Net Banking" && (
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      )}
                      <span className="text-sm text-gray-600">{payment.paymentMode}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <p className="text-gray-700">{payment.date}</p>
                    <p className="text-xs text-gray-400">{payment.timestamp}</p>
                  </td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      payment.status === "Completed" ? "bg-green-100 text-green-700" :
                      payment.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      View Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400">Showing {filteredPayments.length} of {payments.length} transactions</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;