// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
// import Form from './components/Form';
// import Dashboard from './components/Dashboard1';
// import PaymentPage from './components/PaymentPage';
 

// // Navigation component
// const Navigation = () => {
//   const location = useLocation();
  
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <span className="text-green-700 font-bold text-xl">ARS Kreedashala</span>
//           </div>
//           <div className="flex space-x-8">
//             <Link
//               to="/"
//               className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 ${
//                 location.pathname === '/' 
//                   ? 'border-green-500 text-green-700' 
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               }`}
//             >
//               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//               Registration Form
//             </Link>
//             <Link
//               to="/dashboard"
//               className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 ${
//                 location.pathname === '/dashboard' 
//                   ? 'border-green-500 text-green-700' 
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               }`}
//             >
//               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//               </svg>
//               Dashboard
//             </Link>
//             <Link
//               to="/payment"
//               className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 ${
//                 location.pathname === '/payment' 
//                   ? 'border-green-500 text-green-700' 
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               }`}
//             >
//               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//               Payments
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Main App Component
// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<Form />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/payment" element={<PaymentPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watch from './components/Watch';
import Section from './components/Section';
import Tracker from './components/Tracker';
import Blog from './components/Blog';
import Detail from './components/Detail';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page: Contains everything in sequence */}
        <Route 
          path="/" 
          element={
            <>
              <Watch />
              <Section />
              <Tracker />
              <Blog/>
            </>
          } 
        />

         
        <Route path="/blog/:id" element={<Detail/>} />
      </Routes>
    </Router>
  );
};

export default App;