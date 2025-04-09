import React from 'react';
import { Settings, LogOut } from 'lucide-react';

interface UserProfileProps {
  name: string;
  email: string;
  photoUrl: string;
  onSignOut: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, photoUrl, onSignOut }) => {
  return (
    <div className="border-t p-4">
      <div className="flex items-center space-x-3">
        <img
          src={photoUrl || 'https://avatar.vercel.sh/rauchg?size=80'}
          alt="User profile"
          className="h-10 w-10 rounded-full bg-gray-200"
        />
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm w-full p-2 rounded hover:bg-gray-50">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
        <button
          onClick={onSignOut}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm w-full p-2 rounded hover:bg-gray-50"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfile; 