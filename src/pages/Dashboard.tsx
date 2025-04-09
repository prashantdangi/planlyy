import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Sidebar from '../components/Sidebar';
import UserProfile from '../components/UserProfile';
import MainContent from '../components/MainContent';
import AiPanel from '../components/AiPanel';
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('notes');
  const [greeting, setGreeting] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [userName, setUserName] = useState('User');
  const [userEmail, setUserEmail] = useState('');
  const [userPhotoUrl, setUserPhotoUrl] = useState('');
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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        console.log("User Data:", user);
        setUserName(user.user_metadata?.full_name || user.user_metadata?.name || user.email || 'User');
        setUserEmail(user.email || '');
        setUserPhotoUrl(user.user_metadata?.avatar_url || user.user_metadata?.picture || '');
      } else {
        console.log("No user logged in, redirecting...");
        navigate('/');
      }
    };

    fetchUser();

    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting('🌅 Hi');
    else if (hour >= 12 && hour < 18) setGreeting('☀️ Hi');
    else setGreeting('🌙 Hi');

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_OUT' || !session) {
            navigate('/');
        }
    });

    return () => {
        subscription?.unsubscribe();
    };

  }, [navigate]);

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('AI Prompt:', aiPrompt);
    setAiPrompt('');
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        greeting={greeting}
        userName={userName}
        userEmail={userEmail}
        userPhotoUrl={userPhotoUrl}
        onSignOut={handleSignOut}
      />
      
      <MainContent
        activeTab={activeTab}
        notes={notes}
        emails={emails}
        events={events}
      />

      <AiPanel
        aiPrompt={aiPrompt}
        setAiPrompt={setAiPrompt}
        handleAiSubmit={handleAiSubmit}
      />
    </div>
  );
};

export default Dashboard;