import React from 'react';
import { Plus } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface NotesProps {
  notes: Note[];
}

const Notes = ({ notes }: NotesProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium text-gray-900">My Notes</h1>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
          <Plus className="h-5 w-5 mr-1" />
          New Note
        </button>
      </div>

      {/* Writing Canvas */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <textarea
          placeholder="Write your notes here..."
          className="w-full h-48 resize-none border-0 focus:ring-0 focus:outline-none text-gray-600 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default Notes; 