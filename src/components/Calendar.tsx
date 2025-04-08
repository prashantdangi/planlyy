import React from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
}

interface CalendarProps {
  events: Event[];
}

const Calendar = ({ events }: CalendarProps) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-gray-900">Calendar</h1>
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
    </div>
  );
};

export default Calendar; 