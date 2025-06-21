"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export default function SchedulePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto"> {/* Controls max width for larger screens */}
        <h1 className="text-3xl font-bold text-center mb-8">Schedule</h1>
        
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-lg scale-100 md:scale-110" // Makes calendar larger on desktop
            classNames={{
              months: "w-full",
              month: "w-full",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-lg font-medium",
              nav: "gap-1 flex items-center",
              nav_button: "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100",
              table: "w-full border-collapse",
              head_row: "flex",
              head_cell: "text-muted-foreground rounded-md w-12 font-normal text-base",
              row: "flex w-full mt-2",
              cell: "h-12 w-12 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-10 w-10 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground",
              day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
              day_today: "bg-accent text-accent-foreground",
            }}
            captionLayout="dropdown"
            fromYear={2020}
            toYear={2030}
          />
        </div>
      </div>
    </div>
  )
}