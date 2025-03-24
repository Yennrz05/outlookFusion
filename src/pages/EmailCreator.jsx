// import { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';



// export default function EmailCreator() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     domain: '@outlook.com',
//     dateOfBirth: '',
//     country: '',
//     language: '',
//     mode: 'manual',
//     quantity: 1
//   });

//   const [isCheckingEmail, setIsCheckingEmail] = useState(false);
//   const [emailStatus, setEmailStatus] = useState<'available' | 'unavailable' | null>(null);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleInputChange = () => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (name === 'mode' && value === 'manual') {
//       setFormData(prev => ({ ...prev, quantity: 1 }));
//     }
//   };

//   const checkEmailAvailability = async () => {
//     setIsCheckingEmail(true);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setEmailStatus(Math.random() > 0.5 ? 'available' : 'unavailable');
//     setIsCheckingEmail(false);
//   };

//   const generateRandomData = () => {
//     const randomNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emma'];
//     const randomLastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];
    
//     setFormData(prev => ({
//       ...prev,
//       firstName: randomNames[Math.floor(Math.random() * randomNames.length)],
//       lastName: randomLastNames[Math.floor(Math.random() * randomLastNames.length)],
//       email: `${Math.random().toString(36).substring(2, 8)}`,
//       dateOfBirth: '1990-01-01',
//       country: 'United States',
//       language: 'English'
//     }));
//   };

//   const handleSubmit = async () => {
//     e.preventDefault();
//     setIsProcessing(true);
    
//     if (formData.mode === 'automatic') {
//       // Simulate batch processing
//       for (let i = 0; i < formData.quantity; i++) {
//         generateRandomData();
//         await new Promise(resolve => setTimeout(resolve, 500));
//       }
//     }
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     setIsProcessing(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#1e2536] flex">
//       <Sidebar />
      
//       <div className="flex-1">
//         <Header title="Email Creator" />
        
//         <div className="p-6">
//           <div className="max-w-2xl mx-auto bg-[#252d3f] rounded-lg p-6">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Mode Selection */}
//               <div className="flex gap-4 p-4 bg-[#1e2536] rounded-lg">
//                 <label className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="mode"
//                     value="manual"
//                     checked={formData.mode === 'manual'}
//                     onChange={handleInputChange}
//                     className="text-blue-500 focus:ring-blue-500 bg-[#252d3f] border-gray-700"
//                   />
//                   <span className="text-gray-200">Manual Mode</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="mode"
//                     value="automatic"
//                     checked={formData.mode === 'automatic'}
//                     onChange={handleInputChange}
//                     className="text-blue-500 focus:ring-blue-500 bg-[#252d3f] border-gray-700"
//                   />
//                   <span className="text-gray-200">Automatic Mode</span>
//                 </label>
//               </div>

//               {formData.mode === 'automatic' && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-1">
//                     Number of Emails to Generate
//                   </label>
//                   <input
//                     type="number"
//                     name="quantity"
//                     min="1"
//                     max="100"
//                     value={formData.quantity}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 bg-[#1e2536] border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               )}

//               <div className="grid grid-cols-2 gap-4">
//                 {/* First Name */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-1">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 bg-[#1e2536] border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>

//                 {/* Last Name */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-1">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 bg-[#1e2536] border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   Email
//                 </label>
//                 <div className="flex gap-2">
//                   <div className="flex-1 flex">
//                     <input
//                       type="text"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 bg-[#1e2536] border border-gray-700 rounded-l-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                     <select
//                       name="domain"
//                       value={formData.domain}
//                       onChange={handleInputChange}
//                       className="px-4 py-2 bg-[#1e2536] border border-l-0 border-gray-700 rounded-r-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="@outlook.com">@outlook.com</option>
//                       <option value="@hotmail.com">@hotmail.com</option>
//                     </select>
//                   </div>
//                   <button
//                     type="button"
//                     onClick={checkEmailAvailability}
//                     disabled={isCheckingEmail}
//                     className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
//                   >
//                     {isCheckingEmail ? (
//                       <Loader2 className="w-4 h-4 animate-spin" />
//                     ) : (
//                       'Check Availability'
//                     )}
//                   </button>
//                 </div>
//                 {emailStatus && (
//                   <p className={`mt-1 text-sm ${emailStatus === 'available' ? 'text-green-400' : 'text-red-400'}`}>
//                     {emailStatus === 'available' ? (
//                       <span className="flex items-center gap-1">
//                         <Check className="w-4 h-4" /> Email is available
//                       </span>
//                     ) : (
//                       'Email is already taken'
//                     )}
//                   </p>
//                 )}
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 {/* Date of Birth */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-1">
//                     Date of Birth
//                   </label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={formData.dateOfBirth}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 bg-[#1e2536] border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>

//                 {/* Country */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-1">
//                     Country
//                   </label>
//                   <select
//                     name="country"
//                     value={formData.country}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 bg-[#1e2536] border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   >
//                     <option value="">Select Country</option>
//                     <option value="United States">United States</option>
//                     <option value="United Kingdom">United Kingdom</option>
//                     <option value="Canada">Canada</option>
//                     <option value="Australia">Australia</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Language */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   Language
//                 </label>
//                 <select
//                   name="language"
//                   value={formData.language}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 bg-[#1e2536] border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 >
//                   <option value="">Select Language</option>
//                   <option value="English">English</option>
//                   <option value="Spanish">Spanish</option>
//                   <option value="French">French</option>
//                   <option value="German">German</option>
//                 </select>
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-end gap-4">
//                 {formData.mode === 'automatic' && (
//                   <button
//                     type="button"
//                     onClick={generateRandomData}
//                     className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg flex items-center gap-2 transition-colors"
//                   >
//                     <RefreshCw className="w-4 h-4" />
//                     Generate Random
//                   </button>
//                 )}
//                 <button
//                   type="submit"
//                   disabled={isProcessing}
//                   className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
//                 >
//                   {isProcessing ? (
//                     <>
//                       <Loader2 className="w-4 h-4 animate-spin" />
//                       Processing...
//                     </>
//                   ) : (
//                     <>
//                       <User className="w-4 h-4" />
//                       Create Email{formData.mode === 'automatic' ? 's' : ''}
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }