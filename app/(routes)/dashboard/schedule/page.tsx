"use client"

import * as React from "react"
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function SchedulePage() {
  // Sample timetable data with more subjects
  const timetable = [
    { day: "Monday", periods: [
      { time: "9:30 - 10:20", subject: "Project", teacher: "Sherikh Sir", room: "C110" },
      { time: "10:20 - 11:15", subject: "Project", teacher: "Sherikh Sir", room: "C110" },
      { time: "11:30 - 12:30", subject: "Project", teacher: "Sherikh Sir", room: "C110" },
      { time: "1:30 - 2:15", subject: "Elective", teacher: "Viju sir", room: "C110" },
      { time: "2:15-3:10", subject: "Deep Learning", teacher: "Surya Miss", room: "C110" },
      { time: "3:15-4:30", subject: "Industrial Safety", teacher: "Sherikh Sir", room: "C110" }
    ]},
    { day: "Tuesday", periods: [
      { time: "9:30 - 10:20", subject: "Open Elective", teacher: "Abin Sir", room: "C110" },
      { time: "10:20 - 11:15", subject: "Open Elective", teacher: "Abin Sir", room: "C110" },
      { time: "11:30 - 12:30", subject: "Industrial Safety", teacher: "Sherikh Sir", room: "C110" },
      { time: "1:30 - 2:15", subject: "Elective", teacher: "Viju sir", room: "C110" },
      { time: "2:15-3:10", subject: "Deep Learning", teacher: "Surya Miss", room: "C110" },
      { time: "3:15-4:30", subject: "Seminar", teacher: "Fahma Miss", room: "C110" }
    ]},
    { day: "Wednesday", periods: [
      { time: "9:30 - 10:20", subject: "DL LAB & Seminar", teacher: "Haseena Miss", room: "C110" },
      { time: "10:20 - 11:15", subject: "DL LAB & Seminar", teacher: "Abin Sir", room: "C110" },
      { time: "11:30 - 12:30", subject: "DL LAB & Seminar", teacher: "Fahma Miss", room: "C110" },
      { time: "1:30 - 2:15", subject: "Industrial Safety", teacher: "Sherikh Sir", room: "C110" },
      { time: "2:15-3:10", subject: "Open Elective", teacher: "Abin Sir", room: "C110" },
      { time: "3:15-4:30", subject: "Open Elective", teacher: "Abin Sir", room: "C110" }
    ]},
    { day: "Thursday", periods: [
      { time: "9:30 - 10:20", subject: "Deep Learning", teacher: "Surya Miss", room: "C110" },
      { time: "10:20 - 11:15", subject: "Elective", teacher: "Viju Sir", room: "C110" },
      { time: "11:30 - 12:30", subject: "Industrial Safety", teacher: "Sherikh Sir", room: "C110" },
      { time: "1:30 - 2:15", subject: "DL LAB & SEMINAR", teacher: "Bhavya Miss", room: "C110" },
      { time: "2:15-3:10", subject: "DL LAB & SEMINAR", teacher: "Bhavya Miss", room: "C110" },
      { time: "3:15-4:30", subject: "DL LAB & SEMINAR", teacher: "Bhavya Miss", room: "C110" }
    ]},
    { day: "Friday", periods: [
      { time: "9:30 - 10:20", subject: "Elective", teacher: "Fahma Miss", room: "C110" },
      { time: "10:20 - 11:15", subject: "Deep Learning", teacher: "Surya Miss", room: "C110" },
      { time: "11:30 - 12:30", subject: "Seminar", teacher: "Haseena Miss", room: "C110" },
      { time: "1:30 - 2:15", subject: "Project", teacher: "Viju sir", room: "C110" },
      { time: "2:15-3:10", subject: "Project", teacher: "Viju Sir", room: "C110" },
      { time: "3:15-4:30", subject: "Project", teacher: "Sherikh Sir", room: "C110" }
    ]}
  ]

  return (
    <div className="relative flex flex-col items-center min-h-screen py-8 px-4">
      {/* Header - Centered */}
      <div className="w-full max-w-6xl mb-8 text-center">
        <TypingAnimation>Class Schedule</TypingAnimation>
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl">
        {/* Timetable Grid */}
        <div className="space-y-8">
          {timetable.map((daySchedule) => (
            <div key={daySchedule.day} className="border border-gray-100 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
              {/* Day Header */}
              <div className="bg-gray-50/90 px-4 py-3 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">{daySchedule.day}</h2>
              </div>
              
              {/* Periods Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
                {daySchedule.periods.map((period, index) => (
                  <div 
                    key={index}
                    className="relative p-4 rounded-lg border border-gray-200 bg-white/60 backdrop-blur-sm transition-all 
                    hover:border-gray-300 hover:shadow-md hover:translate-y-[-2px] hover:bg-white/80
                    group"
                  >
                    {/* Time badge */}
                    <div className="absolute top-3 right-3 bg-gray-100/80 group-hover:bg-gray-200/80 text-gray-700 text-xs px-2 py-1 rounded-full transition-colors">
                      {period.time}
                    </div>
                    
                    {/* Room badge */}
                    {period.room && (
                      <div className="absolute top-3 left-3 bg-white/80 border border-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {period.room}
                      </div>
                    )}
                    
                    {/* Main content */}
                    <div className="pt-8">
                      <h3 className="font-medium text-gray-900 text-lg mb-1">
                        {period.subject}
                      </h3>
                      {period.teacher && (
                        <p className="text-sm text-gray-600">With {period.teacher}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}