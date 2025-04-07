import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { 
  Search, 
  Plus,
  Menu,
  X,
  Settings,
  LogOut,
  Send,
  Sparkles
} from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('notes');
  const [greeting, setGreeting] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [emails, setEmails] = useState([
    { id: 1, from: 'John Doe', subject: 'Project Update', time: '10:30 AM' },
    { id: 2, from: 'Jane Smith', subject: 'Meeting Tomorrow', time: '09:15 AM' },
  ]);
  const [events, setEvents] = useState([
    { id: 1, title: 'Team Meeting', date: '2024-03-20', time: '10:00 AM' },
    { id: 2, title: 'Project Deadline', date: '2024-03-22', time: '05:00 PM' },
  ]);
  const [notes, setNotes] = useState([
    { id: 1, title: 'Project Ideas', content: 'Brainstorming session notes...', date: '2024-03-19' },
    { id: 2, title: 'Meeting Notes', content: 'Discussion points from team meeting...', date: '2024-03-18' },
  ]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting('🌅 Good Morning');
    else if (hour >= 12 && hour < 18) setGreeting('☀️ Good Afternoon');
    else setGreeting('🌙 Good Evening');
  }, []);

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('AI Prompt:', aiPrompt);
    setAiPrompt('');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'notes':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map(note => (
              <div key={note.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100">
                <h3 className="font-medium text-lg mb-2">{note.title}</h3>
                <p className="text-gray-600 mb-3">{note.content}</p>
                <span className="text-sm text-gray-400">{note.date}</span>
              </div>
            ))}
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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
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
        {/* User Profile */}
        <div className="border-t p-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User profile"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <p className="font-medium text-sm">John Doe</p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm w-full p-2 rounded hover:bg-gray-50">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm w-full p-2 rounded hover:bg-gray-50">
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? 'lg:pl-64' : ''} transition-all duration-300`}>
        {/* Top Bar */}
        <div className="bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <button onClick={() => setSidebarOpen(true)} className={`lg:hidden ${sidebarOpen ? 'hidden' : 'block'}`}>
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
            <div className="flex-1 max-w-2xl ml-4">
              <div className="relative">
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

        {/* Content Area */}
        <div className="p-6 flex">
          {/* Main Content */}
          <div className="flex-1 mr-4">
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

          {/* AI Panel */}
          <div className="w-80 bg-white rounded-lg shadow-sm p-4 h-fit border border-gray-100">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-5 w-5 text-blue-500" />
              <h2 className="text-lg font-medium">AI Assistant</h2>
            </div>
            <form onSubmit={handleAiSubmit} className="space-y-4">
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="Ask AI to help you write notes, schedule events, or compose emails..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Send className="h-4 w-4" />
                <span>Send to AI</span>
              </button>
            </form>
            <div className="mt-4 text-sm text-gray-500">
              <p>Suggestions:</p>
              <ul className="mt-2 space-y-2">
                <li>• "Write a meeting summary about..."</li>
                <li>• "Schedule a team meeting for..."</li>
                <li>• "Draft an email to discuss..."</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;