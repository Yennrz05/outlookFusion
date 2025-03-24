
// export default function EmailTableRow() {
//   return (
//     <tr className="border-b border-gray-700 hover:bg-[#2a324a] transition-colors">
//       <td className="p-4">
//         <input
//           type="checkbox"
//           checked={isSelected}
//           onChange={() => onToggleSelect(email.id)}
//           className="rounded bg-[#1e2536] border-gray-700 text-blue-500 focus:ring-blue-500"
//         />
//       </td>
//       <td className="p-4">
//         <div>
//           <div className="text-gray-200 font-medium">{email.name}</div>
//           <div className="text-gray-400 text-sm">{email.email}</div>
//         </div>
//       </td>
//       <td className="p-4 text-gray-200">{email.country}</td>
//       <td className="p-4 text-gray-200">{email.dateOfBirth}</td>
//       <td className="p-4">
//         <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
//           {email.method}
//         </span>
//       </td>
//       <td className="p-4">
//         <div className="w-32 bg-gray-700 rounded-full h-2">
//           <div
//             className="bg-blue-500 h-2 rounded-full"
//             style={{ width: `${email.progress}%` }}
//           />
//         </div>
//       </td>
//       <td className="p-4">
//         <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
//           {email.status}
//         </span>
//       </td>
//       <td className="p-4">
//         <div className="flex items-center gap-2">
//           <button className="text-gray-400 hover:text-gray-200 p-1 hover:bg-[#1e2536] rounded-lg transition-colors">
//             <Trash2 className="w-5 h-5" />
//           </button>
//           <button className="text-gray-400 hover:text-gray-200 p-1 hover:bg-[#1e2536] rounded-lg transition-colors">
//             <Eye className="w-5 h-5" />
//           </button>
//           <button className="text-gray-400 hover:text-gray-200 p-1 hover:bg-[#1e2536] rounded-lg transition-colors">
//             <MoreVertical className="w-5 h-5" />
//           </button>
//         </div>
//       </td>
//     </tr>
//   );
// }