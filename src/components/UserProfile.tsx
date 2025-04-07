import React from 'react';
import { Settings, LogOut } from 'lucide-react';

const UserProfile = () => {
  return (
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
  );
};

export default UserProfile; 