import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-[#252d3f] p-6 space-y-8">
      <div onClick={() => navigate('/dashboard')} className="cursor-pointer">
        <Logo />
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Main</h3>
          <div className="mt-2 space-y-1">
            <Link
              to="/dashboard"
              className={`flex items-center w-full px-4 py-2 text-gray-300 hover:bg-[#1e2536] rounded-lg transition-colors ${
                location.pathname === '/dashboard' ? 'bg-[#1e2536] text-white' : ''
              }`}
            >
              {/* <LayoutDashboard className="w-5 h-5 mr-3" /> */}
              Dashboard
            </Link>
          </div>
        </div>

        <div>
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tools</h3>
          <div className="mt-2 space-y-1">
            <Link
              to="/email-creator"
              className={`flex items-center w-full px-4 py-2 text-gray-300 hover:bg-[#1e2536] rounded-lg transition-colors ${
                location.pathname === '/email-creator' ? 'bg-[#1e2536] text-white' : ''
              }`}
            >
              {/* <MailPlus className="w-5 h-5 mr-3" /> */}
              Email Creator
            </Link>
            <Link
              to="/email-list"
              className={`flex items-center w-full px-4 py-2 text-gray-300 hover:bg-[#1e2536] rounded-lg transition-colors ${
                location.pathname === '/email-list' ? 'bg-[#1e2536] text-white' : ''
              }`}
            >
              {/* <Mail className="w-5 h-5 mr-3" /> */}
              Email List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}