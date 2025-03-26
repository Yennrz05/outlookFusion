import { FaBars } from "react-icons/fa";


export default function Header({ title, setIsOpenBar }) {
  return (
    <header className="bg-[#0f172a] p-4 flex items-center justify-between border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <div className="text-white p-2 rounded-md hover:bg-gray-700 transition-colors cursor-pointer" onClick={() => setIsOpenBar((prev) => !prev)}>
          <FaBars />
        </div>
        <h1 className="text-2xl font-bold text-gray-200 leading-none">{title}</h1>
      </div>
      {/* <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-gray-200 transition-colors">
          <History className="w-6 h-6" />
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-200 transition-colors">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-200 transition-colors">
          <User className="w-6 h-6" />
        </button>
      </div> */}
    </header>
  );
}