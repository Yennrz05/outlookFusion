// import { useState, useMemo } from 'react';
// import Sidebar from '../components/Sidebar';
// import EmailTableHeader from '../components/EmailTableHeader';
// import EmailTableRow from '../components/EmailTableRow';
// import Header from '../components/Header';


// const mockEmails = Array.from({ length: 10 }, (_, i) => ({
//   id: i + 1,
//   name: `Charles Bradley ${i + 1}`,
//   email: `charlesbradley${i + 1}@outlook.com`,
//   country: 'United States',
//   dateOfBirth: '03/09/1999',
//   method: 'Manual',
//   progress: 75,
//   status: 'Created'
// }));

// export default function EmailList() {
//   const [selectedEmails, setSelectedEmails] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [entriesPerPage, setEntriesPerPage] = useState('10');
//   const [mode, setMode] = useState('');
//   const [country, setCountry] = useState('');
//   const [status, setStatus] = useState('');

//   const filteredEmails = useMemo(() => {
//     return mockEmails.filter(email => {
//       const matchesSearch = searchQuery === '' || 
//         email.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         email.email.toLowerCase().includes(searchQuery.toLowerCase());
      
//       const matchesMode = mode === '' || email.method === mode;
//       const matchesCountry = country === '' || email.country === country;
//       const matchesStatus = status === '' || email.status === status;

//       return matchesSearch && matchesMode && matchesCountry && matchesStatus;
//     });
//   }, [searchQuery, mode, country, status]);

//   const toggleEmailSelection = () => {
//     setSelectedEmails(prev => 
//       prev.includes(id) 
//         ? prev.filter(emailId => emailId !== id)
//         : [...prev, id]
//     );
//   };

//   const handleSelectAll = () => {
//     setSelectedEmails(checked ? filteredEmails.map(email => email.id) : []);
//   };

//   return (
//     <div className="min-h-screen bg-[#1e2536] flex">
//       <Sidebar />
      
//       <div className="flex-1">
//         <Header title="Email List Management" />

//         {/* Main Content */}
//         <div className="p-6">
//           {/* Filters */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-200 mb-4">Filters</h2>
//             <div className="grid grid-cols-3 gap-4">
//               <div className="relative">
//                 <select
//                   value={mode}
//                   onChange={(e) => setMode(e.target.value)}
//                   className="w-full bg-[#252d3f] text-gray-200 p-3 rounded-lg appearance-none border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
//                 >
//                   <option value="">Select By Mode</option>
//                   <option value="Manual">Manual</option>
//                   <option value="Automatic">Automatic</option>
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
//               </div>
//               <div className="relative">
//                 <select
//                   value={country}
//                   onChange={(e) => setCountry(e.target.value)}
//                   className="w-full bg-[#252d3f] text-gray-200 p-3 rounded-lg appearance-none border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
//                 >
//                   <option value="">Select Country</option>
//                   <option value="United States">United States</option>
//                   <option value="Canada">Canada</option>
//                   <option value="United Kingdom">United Kingdom</option>
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
//               </div>
//               <div className="relative">
//                 <select
//                   value={status}
//                   onChange={(e) => setStatus(e.target.value)}
//                   className="w-full bg-[#252d3f] text-gray-200 p-3 rounded-lg appearance-none border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
//                 >
//                   <option value="">Select Status</option>
//                   <option value="Created">Created</option>
//                   <option value="Pending">Pending</option>
//                   <option value="Completed">Completed</option>
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
//               </div>
//             </div>
//           </div>

//           {/* Table Controls */}
//           <div className="flex justify-between items-center mb-6">
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <select
//                   value={entriesPerPage}
//                   onChange={(e) => setEntriesPerPage(e.target.value)}
//                   className="bg-[#252d3f] text-gray-200 p-2.5 pl-4 pr-10 rounded-lg appearance-none border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
//                 >
//                   <option value="10">10</option>
//                   <option value="25">25</option>
//                   <option value="50">50</option>
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
//               </div>
//               <span className="text-gray-400">entries per page</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search Email"
//                   className="bg-[#252d3f] text-gray-200 p-2.5 pl-10 rounded-lg w-72 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
//                 />
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
//               </div>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors">
//                 Export <ChevronDown className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="bg-[#252d3f] rounded-lg overflow-hidden border border-gray-700">
//             <table className="w-full">
//               <thead>
//                 <EmailTableHeader onSelectAll={handleSelectAll} />
//               </thead>
//               <tbody>
//                 {filteredEmails.map((email) => (
//                   <EmailTableRow
//                     key={email.id}
//                     email={email}
//                     isSelected={selectedEmails.includes(email.id)}
//                     onToggleSelect={toggleEmailSelection}
//                   />
//                 ))}
//               </tbody>
//             </table>

//             {/* Pagination */}
//             <div className="p-4 flex items-center justify-between text-gray-200 border-t border-gray-700">
//               <div className="text-gray-400">
//                 Showing 1 to {Math.min(parseInt(entriesPerPage), filteredEmails.length)} of {filteredEmails.length} entries
//               </div>
//               <div className="flex items-center gap-1">
//                 <button className="p-2 rounded-lg hover:bg-[#1e2536] text-gray-400 hover:text-gray-200 transition-colors">&lt;</button>
//                 <button className="p-2 rounded-lg bg-blue-600 text-white min-w-[32px] text-center">1</button>
//                 <button className="p-2 rounded-lg hover:bg-[#1e2536] text-gray-400 hover:text-gray-200 transition-colors min-w-[32px] text-center">2</button>
//                 <button className="p-2 rounded-lg hover:bg-[#1e2536] text-gray-400 hover:text-gray-200 transition-colors min-w-[32px] text-center">3</button>
//                 <button className="p-2 rounded-lg hover:bg-[#1e2536] text-gray-400 hover:text-gray-200 transition-colors min-w-[32px] text-center">4</button>
//                 <button className="p-2 rounded-lg hover:bg-[#1e2536] text-gray-400 hover:text-gray-200 transition-colors min-w-[32px] text-center">5</button>
//                 <button className="p-2 rounded-lg hover:bg-[#1e2536] text-gray-400 hover:text-gray-200 transition-colors">&gt;</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }