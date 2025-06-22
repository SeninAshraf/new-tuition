"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export default function SchedulePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  
  // Sample timetable data
  const timetable = [
    { day: "Monday", periods: [
      { time: "9:30 - 10:20", subject: "Not set", teacher: "", room: "A12" },
      { time: "10:20 - 11:00", subject: "Not set", teacher: "", room: "B05" },
      { time: "11:00 - 11:40", subject: "Not set", teacher: "", room: "Lab 3" },
      { time: "12:00 - 12:45", subject: "Not set", teacher: "", room: "C22" },
      { time: "1:00 - 1:45", subject: "Not set", teacher: "", room: "A10" },
      { time: "2:00 - 3:00", subject: "Not set", teacher: "", room: "Gym" }
    ]},
    // ... (rest of the timetable data remains the same)
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-indigo-800">Weekly Schedule</h1>
        <p className="text-center text-lg text-indigo-600 mb-8">View your classes and activities for the week</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white rounded-xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Calendar</h2>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-xl border-0 shadow-md"
                classNames={{
                  months: "w-full",
                  month: "w-full space-y-4",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-xl font-semibold text-indigo-700",
                  nav: "flex items-center gap-2",
                  nav_button: "h-9 w-9 flex items-center justify-center rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition-colors",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse",
                  head_row: "flex",
                  head_cell: "text-indigo-500 rounded-md w-10 font-medium text-sm",
                  row: "flex w-full mt-1",
                  cell: "h-10 w-10 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-indigo-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-9 w-9 p-0 font-medium aria-selected:opacity-100 hover:bg-indigo-100 hover:text-indigo-800 rounded-full flex items-center justify-center",
                  day_selected: "bg-indigo-600 text-white hover:bg-indigo-700 hover:text-white focus:bg-indigo-700 focus:text-white",
                  day_today: "border border-indigo-400 text-indigo-800",
                  day_outside: "text-gray-400 opacity-50",
                }}
                captionLayout="dropdown"
                fromYear={2020}
                toYear={2030}
              />
            </div>
            
            {/* Selected Date Info */}
            {date && (
              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-indigo-500">Selected Date</h3>
                    <p className="text-lg font-semibold text-indigo-800">
                      {date.toLocaleDateString('en-US', { weekday: 'long' })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-indigo-700">
                      {date.getDate()}
                    </p>
                    <p className="text-sm text-indigo-600">
                      {date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Timetable Section */}
          <div className="bg-white rounded-xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Weekly Timetable</h2>
            
            <div className="space-y-4">
              {timetable.map((daySchedule) => (
                <div key={daySchedule.day} className="border-b border-indigo-100 pb-4 last:border-0">
                  <h3 className="text-lg font-medium text-indigo-600 mb-2">{daySchedule.day}</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {daySchedule.periods.map((period, index) => (
                      <div 
                        key={index} 
                        className="bg-indigo-50 p-3 rounded-lg hover:bg-indigo-100 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-medium text-indigo-500">{period.time}</span>
                          {period.room && (
                            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                              {period.room}
                            </span>
                          )}
                        </div>
                        <h4 className="font-medium text-indigo-800 mt-1">{period.subject}</h4>
                        {period.teacher && (
                          <p className="text-xs text-indigo-600 mt-1">With {period.teacher}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Current Period Info (mobile only) */}
        <div className="lg:hidden mt-8 bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">Current Period</h2>
          <div className="bg-indigo-600 text-white p-4 rounded-lg">
            <p className="font-medium">Mathematics with Mr. Smith</p>
            <p className="text-sm opacity-90">8:00 AM - 9:00 AM</p>
            <p className="text-sm mt-2">Room A12</p>
          </div>
        </div>
      </div>
    </div>
  )
}