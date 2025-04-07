import React from 'react';
import { Plus, Search, Menu } from 'lucide-react';

interface MainContentProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeTab: string;
  notes: any[];
  emails: any[];
  events: any[];
}

const MainContent = ({ sidebarOpen, setSidebarOpen, activeTab, notes, emails, events }: MainContentProps) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'notes':
        return (
          <div className="space-y-6">
            {/* Writing Canvas */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <textarea
                placeholder="Write your notes here..."
                className="w-full h-48 resize-none border-0 focus:ring-0 focus:outline-none text-gray-600 placeholder-gray-400"
              />
            </div>
            
            {/* Existing Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notes.map(note => (
                <div key={note.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100">
                  <h3 className="font-medium text-lg mb-2">{note.title}</h3>
                  <p className="text-gray-600 mb-3">{note.content}</p>
                  <span className="text-sm text-gray-400">{note.date}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'email':
        return (
          <div className="space-y-2">
            {emails.map(email => (
              <div key={email.id} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-100 flex items-center justify-between">
                <div className="flex items-center">
                  <img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png" alt="Gmail" className="w-6 h-6 mr-3" />
                  <div>
                    <p className="font-medium">{email.from}</p>
                    <p className="text-gray-600">{email.subject}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400">{email.time}</span>
              </div>
            ))}
          </div>
        );
      case 'calendar':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="grid grid-cols-7 gap-1">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center font-medium p-2 text-gray-600">{day}</div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} className="border p-2 min-h-[80px] relative hover:bg-gray-50 transition-colors">
                  <span className="text-sm text-gray-400">{i + 1}</span>
                  {events.map(event => event.date === `2024-03-${i + 1}` && (
                    <div key={event.id} className="bg-blue-50 text-blue-700 p-1 text-xs rounded mt-1 border border-blue-100">
                      {event.title}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex-1 ${sidebarOpen ? 'lg:pl-64' : ''} transition-all duration-300`}>
      {/* Top Bar */}
      <div className="bg-white shadow-sm">
        <div className="flex items-center justify-between h-16 px-4">
          <button 
            onClick={() => setSidebarOpen(true)} 
            className={`lg:hidden ${sidebarOpen ? 'hidden' : 'block'}`}
          >
            <Menu className="h-6 w-6 text-gray-500" />
          </button>
          <div className={`flex-1 flex justify-center transition-all duration-300 ${
            sidebarOpen ? 'max-w-2xl' : 'max-w-3xl'
          }`}>
            <div className="relative w-full max-w-2xl mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          {/* Add some spacing on the right to balance the layout */}
          <div className="w-6 lg:hidden"></div>
        </div>
      </div>

      {/* Main Layout with Content */}
      <div className="h-[calc(100vh-4rem)]"> {/* Full height minus top bar */}
        {/* Main Content Area with dynamic width and centering */}
        <div className="h-full overflow-auto p-6">
          <div className="max-w-5xl mx-auto transition-all duration-300" style={{ 
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
            paddingRight: '320px', // Default AI Panel width
          }}>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-medium text-gray-900">
                {activeTab === 'notes' && 'My Notes'}
                {activeTab === 'email' && 'Gmail'}
                {activeTab === 'calendar' && 'Calendar'}
              </h1>
              {activeTab === 'notes' && (
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                  <Plus className="h-5 w-5 mr-1" />
                  New Note
                </button>
              )}
            </div>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent; 