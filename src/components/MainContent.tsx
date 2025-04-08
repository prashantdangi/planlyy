import React from 'react';
import { Search } from 'lucide-react';
import Notes from './Notes';
import Email from './Email';
import Calendar from './Calendar';

interface MainContentProps {
  activeTab: string;
  notes: any[];
  emails: any[];
  events: any[];
}

const MainContent = ({ activeTab, notes, emails, events }: MainContentProps) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'notes':
        return <Notes notes={notes} />;
      case 'email':
        return <Email emails={emails} />;
      case 'calendar':
        return <Calendar events={events} />;
      default:
        return null;
    }
  };

  return (
    <div className="pl-64 flex-1 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-white shadow-sm">
        <div className="flex items-center h-16 px-6">
          <div className="flex-1 max-w-5xl">
            <div className="relative w-full max-w-2xl mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout with Content */}
      <div className="h-[calc(100vh-4rem)]">
        <div className="h-full overflow-auto p-6">
          <div className="max-w-5xl transition-all duration-300" style={{ 
            width: '100%',
            paddingRight: '320px',
          }}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent; 