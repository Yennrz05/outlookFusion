

export default function Header({title}) {
  return (
    <header className="bg-[#252d3f] p-4 flex items-center justify-between border-b border-gray-700">
      <h1 className="text-2xl font-bold text-gray-200">{title}</h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-gray-200 transition-colors">
          {/* <History className="w-6 h-6" /> */}
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-200 transition-colors">
          {/* <Bell className="w-6 h-6" /> */}
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-200 transition-colors">
          {/* <User className="w-6 h-6" /> */}
        </button>
      </div>
    </header>
  );
}