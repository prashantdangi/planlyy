import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import UserProfile from '../components/UserProfile';
import MainContent from '../components/MainContent';
import AiPanel from '../components/AiPanel';
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react';

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
    if (hour >= 5 && hour < 12) setGreeting('🌅 Hi');
    else if (hour >= 12 && hour < 18) setGreeting('☀️ Hi');
    else setGreeting('🌙 Hi');
  }, []);

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('AI Prompt:', aiPrompt);
    setAiPrompt('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)} 
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={sidebarOpen}
        className={`fixed top-4 z-50 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 ${
          sidebarOpen ? 'left-[240px]' : 'left-4'
        }`}
      >
        {sidebarOpen ? <ChevronLeft className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div className={`flex flex-col transition-all duration-300 ${
        sidebarOpen ? 'w-[256px]' : 'w-0'
      }`}>
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          greeting={greeting}
        />
      </div>
      
      <div className="flex-1 flex">
        <MainContent
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeTab={activeTab}
          notes={notes}
          emails={emails}
          events={events}
        />
        <div className="fixed top-0 right-0 h-screen w-80">
          <AiPanel
            aiPrompt={aiPrompt}
            setAiPrompt={setAiPrompt}
            handleAiSubmit={handleAiSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;