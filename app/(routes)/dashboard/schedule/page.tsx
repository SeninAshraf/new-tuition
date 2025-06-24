"use client"

import * as React from "react"
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function SchedulePage() {
  // Sample timetable data with more subjects
  const timetable = [
    { day: "Monday", periods: [
      { time: "9:30 - 10:20", subject: "AAD", teacher: "Mr. Smith", room: "A12" },
      { time: "10:20 - 11:00", subject: "Physics", teacher: "Dr. Johnson", room: "B05" },
      { time: "11:00 - 11:40", subject: "Chemistry", teacher: "Ms. Williams", room: "Lab 3" },
      { time: "12:00 - 12:45", subject: "Lunch", teacher: "", room: "Cafeteria" },
      { time: "1:00 - 1:45", subject: "English Literature", teacher: "Mrs. Brown", room: "A10" },
      { time: "2:00 - 3:00", subject: "Physical Education", teacher: "Coach Taylor", room: "Gym" }
    ]},
    { day: "Tuesday", periods: [
      { time: "9:00 - 10:00", subject: "World History", teacher: "Mr. Davis", room: "D08" },
      { time: "10:00 - 11:00", subject: "Geography", teacher: "Ms. Wilson", room: "D08" },
      { time: "11:30 - 12:30", subject: "Computer Science", teacher: "Mr. Clark", room: "Lab 1" },
      { time: "1:30 - 2:30", subject: "Algebra", teacher: "Mr. Smith", room: "A12" },
      { time: "2:30 - 3:30", subject: "Art History", teacher: "Ms. Martinez", room: "Studio 2" }
    ]},
    { day: "Wednesday", periods: [
      { time: "9:00 - 10:30", subject: "Physics Lab", teacher: "Dr. Johnson", room: "Lab 2" },
      { time: "10:30 - 11:30", subject: "Organic Chemistry", teacher: "Ms. Williams", room: "Lab 3" },
      { time: "12:00 - 1:00", subject: "Research", teacher: "Ms. Adams", room: "Library" },
      { time: "1:30 - 2:30", subject: "Calculus", teacher: "Mr. Smith", room: "A12" },
      { time: "2:30 - 3:30", subject: "Music Theory", teacher: "Mr. Thompson", room: "Music Room" }
    ]},
    { day: "Thursday", periods: [
      { time: "9:00 - 10:00", subject: "Creative Writing", teacher: "Mrs. Brown", room: "A10" },
      { time: "10:00 - 11:00", subject: "Drama", teacher: "Ms. Garcia", room: "Auditorium" },
      { time: "11:30 - 12:30", subject: "Geometry", teacher: "Mr. Smith", room: "A12" },
      { time: "1:30 - 2:30", subject: "Astrophysics", teacher: "Dr. Johnson", room: "B05" },
      { time: "2:30 - 3:30", subject: "Study Hall", teacher: "Mr. White", room: "A15" }
    ]},
    { day: "Friday", periods: [
      { time: "9:00 - 10:00", subject: "Biochemistry", teacher: "Ms. Williams", room: "Lab 3" },
      { time: "10:00 - 11:00", subject: "Swimming", teacher: "Coach Taylor", room: "Pool" },
      { time: "11:30 - 12:30", subject: "Statistics", teacher: "Mr. Smith", room: "A12" },
      { time: "1:30 - 2:30", subject: "European History", teacher: "Mr. Davis", room: "D08" },
      { time: "2:30 - 3:30", subject: "Robotics Club", teacher: "Mr. Clark", room: "Lab 1" }
    ]}
  ]

  return (
    <div className="relative flex flex-col items-center min-h-screen py-8 px-4">
      {/* Background effect */}
      <FlickeringGrid className="absolute inset-0 -z-10" />
      
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