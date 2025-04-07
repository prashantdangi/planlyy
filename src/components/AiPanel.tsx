import React, { KeyboardEvent, useState, useEffect, MouseEvent } from 'react';
import { Sparkles, Send } from 'lucide-react';

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface AiPanelProps {
  aiPrompt: string;
  setAiPrompt: (prompt: string) => void;
  handleAiSubmit: (e: React.FormEvent) => void;
}

const AiPanel = ({ aiPrompt, setAiPrompt, handleAiSubmit }: AiPanelProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [width, setWidth] = useState(320); // 320px = w-80
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = (e: MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const resize = (e: MouseEvent) => {
    if (isResizing) {
      const newWidth = window.innerWidth - e.clientX;
      // Set minimum and maximum width constraints
      if (newWidth >= 280 && newWidth <= 800) { // min 280px, max 800px
        setWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize as any);
      window.addEventListener('mouseup', stopResizing);
    }

    return () => {
      window.removeEventListener('mousemove', resize as any);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing]);

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;

    // Add user message
    const userMessage: Message = {
      content: aiPrompt,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    
    // Call the original handleAiSubmit
    handleAiSubmit(e);
    
    // Simulate AI response (replace this with actual AI response handling)
    const aiMessage: Message = {
      content: "This is a simulated AI response...",
      isUser: false,
      timestamp: new Date(),
    };
    setTimeout(() => {
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div 
      className="fixed right-0 top-0 h-screen flex"
      style={{ width: `${width}px` }}
    >
      {/* Resize handle */}
      <div
        className="w-1 h-full cursor-ew-resize bg-gray-200 hover:bg-blue-500 transition-colors"
        onMouseDown={startResizing}
      />
      
      <div className="flex-1 bg-white shadow-sm p-4 h-full border-l border-gray-100 flex flex-col">
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="h-5 w-5 text-blue-500" />
          <h2 className="text-lg font-medium">AI Assistant</h2>
        </div>
        
        <div className="mb-4 text-sm text-gray-500">
          <p>Suggestions:</p>
          <ul className="mt-2 space-y-2">
            <li>• "Write a meeting summary about..."</li>
            <li>• "Schedule a team meeting for..."</li>
            <li>• "Draft an email to discuss..."</li>
          </ul>
        </div>

        <div className="flex-1 mb-4 overflow-y-auto overflow-x-hidden border border-gray-100 rounded-lg p-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className="mb-3"
            >
              <div
                className={`inline-block max-w-[80%] p-3 rounded-lg break-words whitespace-pre-wrap ${
                  message.isUser
                    ? 'bg-blue-500 text-white ml-auto'
                    : 'bg-gray-100 text-gray-800'
                }`}
                style={{
                  borderTopRightRadius: message.isUser ? '0' : '0.5rem',
                  borderTopLeftRadius: message.isUser ? '0.5rem' : '0'
                }}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="sticky bottom-0 bg-white pt-2">
          <div className="flex space-x-2">
            <textarea
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-12 overflow-y-auto w-full"
              style={{ 
                maxHeight: '48px', 
                overflowX: 'hidden', 
                wordBreak: 'break-word',
                whiteSpace: 'pre-wrap'
              }}
            />
            <button
              type="submit"
              className="flex-shrink-0 flex items-center justify-center bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AiPanel; 