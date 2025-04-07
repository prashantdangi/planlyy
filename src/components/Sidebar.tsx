import React from 'react';
import { X } from 'lucide-react';
import UserProfile from './UserProfile';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  greeting: string;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen, activeTab, setActiveTab, greeting }: SidebarProps) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col`}>
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <div className="flex items-center">
          <span className="text-xl font-medium text-gray-900">{greeting}, User</span>
        </div>
        <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
          <X className="h-6 w-6 text-gray-500" />
        </button>
      </div>
      <nav className="flex-1 mt-4">
        <button
          onClick={() => setActiveTab('notes')}
          className={`flex items-center w-full px-4 py-2 text-sm ${activeTab === 'notes' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_32dp.png" alt="Notes" className="w-5 h-5 mr-3" />
          Notes
        </button>
        <button
          onClick={() => setActiveTab('email')}
          className={`flex items-center w-full px-4 py-2 text-sm ${activeTab === 'email' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png" alt="Gmail" className="w-5 h-5 mr-3" />
          Gmail
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`flex items-center w-full px-4 py-2 text-sm ${activeTab === 'calendar' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <img src="https://www.gstatic.com/images/branding/product/1x/calendar_2020q4_32dp.png" alt="Calendar" className="w-5 h-5 mr-3" />
          Calendar
        </button>
      </nav>
      <UserProfile />
    </div>
  );
};

export default Sidebar; 