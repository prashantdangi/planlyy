import React from 'react';
import UserProfile from './UserProfile';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  greeting: string;
  userName: string;
  userEmail: string;
  userPhotoUrl: string;
  onSignOut: () => void;
}

const Sidebar = ({ activeTab, setActiveTab, greeting, userName, userEmail, userPhotoUrl, onSignOut }: SidebarProps) => {
  const demoNotes = [
    { id: 1, title: "Meeting Notes", preview: "Discuss project timeline..." },
    { id: 2, title: "Shopping List", preview: "Milk, eggs, bread..." },
    { id: 3, title: "Ideas", preview: "New feature suggestions..." },
  ];

  const demoEmails = [
    { id: 1, from: "John Doe", subject: "Project Update", time: "10:30 AM" },
    { id: 2, from: "Alice Smith", subject: "Meeting Tomorrow", time: "9:15 AM" },
    { id: 3, from: "Team HR", subject: "Monthly Newsletter", time: "Yesterday" },
  ];

  const demoEvents = [
    { id: 1, title: "Team Meeting", time: "2:00 PM", date: "Today" },
    { id: 2, title: "Project Review", time: "11:00 AM", date: "Tomorrow" },
    { id: 3, title: "Client Call", time: "3:30 PM", date: "Thu, Mar 28" },
  ];

  return (
    <div className="fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg flex flex-col">
      <div className="flex items-center h-16 px-4 border-b">
        <span className="text-xl font-medium text-gray-900">{greeting}, {userName}</span>
      </div>
      <nav className="flex-1 mt-4 overflow-y-auto">
        <button
          onClick={() => setActiveTab('notes')}
          className={`flex items-center w-full px-4 py-2 text-sm ${activeTab === 'notes' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_32dp.png" alt="Notes" className="w-5 h-5 mr-3" />
          Notes
        </button>
        
        {activeTab === 'notes' && (
          <div className="mt-2 space-y-1">
            {demoNotes.map(note => (
              <div key={note.id} className="px-8 py-2 hover:bg-gray-50 cursor-pointer">
                <h3 className="text-sm font-medium text-gray-900">{note.title}</h3>
                <p className="text-xs text-gray-500 truncate">{note.preview}</p>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setActiveTab('email')}
          className={`flex items-center w-full px-4 py-2 text-sm ${activeTab === 'email' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png" alt="Gmail" className="w-5 h-5 mr-3" />
          Gmail
        </button>

        {activeTab === 'email' && (
          <div className="mt-2 space-y-1">
            {demoEmails.map(email => (
              <div key={email.id} className="px-8 py-2 hover:bg-gray-50 cursor-pointer">
                <h3 className="text-sm font-medium text-gray-900">{email.from}</h3>
                <p className="text-xs text-gray-500 truncate">{email.subject}</p>
                <span className="text-xs text-gray-400">{email.time}</span>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setActiveTab('calendar')}
          className={`flex items-center w-full px-4 py-2 text-sm ${activeTab === 'calendar' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <img src="https://www.gstatic.com/images/branding/product/1x/calendar_2020q4_32dp.png" alt="Calendar" className="w-5 h-5 mr-3" />
          Calendar
        </button>

        {activeTab === 'calendar' && (
          <div className="mt-2 space-y-1">
            {demoEvents.map(event => (
              <div key={event.id} className="px-8 py-2 hover:bg-gray-50 cursor-pointer">
                <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
                <p className="text-xs text-gray-500">{event.date} at {event.time}</p>
              </div>
            ))}
          </div>
        )}
      </nav>
      <UserProfile
        name={userName}
        email={userEmail}
        photoUrl={userPhotoUrl}
        onSignOut={onSignOut}
      />
    </div>
  );
};

export default Sidebar; 