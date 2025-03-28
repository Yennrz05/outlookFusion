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
    </header>
  );
}