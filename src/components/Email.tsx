import React from 'react';

interface Email {
  id: string;
  from: string;
  subject: string;
  time: string;
}

interface EmailProps {
  emails: Email[];
}

const Email = ({ emails }: EmailProps) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-gray-900">Gmail</h1>
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
    </div>
  );
};

export default Email; 