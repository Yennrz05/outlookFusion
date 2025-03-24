import { IoMailSharp } from "react-icons/io5";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <IoMailSharp className="w-8 h-8 text-blue-500"/>
      <span className="text-2xl font-serif text-gray-200">OutlookFusion</span>
    </div>
  );
}