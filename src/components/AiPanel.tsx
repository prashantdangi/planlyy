import React from 'react';
import { Sparkles, Send } from 'lucide-react';

interface AiPanelProps {
  aiPrompt: string;
  setAiPrompt: (prompt: string) => void;
  handleAiSubmit: (e: React.FormEvent) => void;
}

const AiPanel = ({ aiPrompt, setAiPrompt, handleAiSubmit }: AiPanelProps) => {
  return (
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
  );
};

export default AiPanel; 