"use client";
import { motion } from 'framer-motion';
import { BookOpenText, School, Clock, BarChart3, Users, GraduationCap, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Notes() {
  const semesters = [
    { id: 7, name: 'Semester 7', color: 'from-red-500 to-red-600' },
    { id: 8, name: 'Semester 8', color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <div className="relative flex flex-col items-center min-h-screen py-8 px-4">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            Select Your Semester
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose your semester to access course materials and resources
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {semesters.map((semester, index) => (
            <Link href={`/dashboard/notes/${semester.id}`} key={semester.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${semester.color} rounded-2xl p-6 shadow-xl cursor-pointer 
                  transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl backdrop-blur-sm`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                      {index === 0 && <BookOpenText className="h-8 w-8" />}
                      {index === 1 && <School className="h-8 w-8" />}
                      {index === 2 && <Clock className="h-8 w-8" />}
                      {index === 3 && <BarChart3 className="h-8 w-8" />}
                      {index >= 4 && index <= 7 && <GraduationCap className="h-8 w-8" />}
                    </div>
                    <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full">
                      {semester.id <= 8 ? `Sem ${semester.id}` : 'Advanced'}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h2 className="text-2xl font-bold text-white mb-2">{semester.name}</h2>
                    <p className="text-white/90 text-sm mb-4">
                      {semester.id <= 8 
                        ? '4-5 Core Subjects' 
                        : 'Specialized courses'}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/80">View subjects</span>
                      <ChevronRight className="w-5 h-5 text-white/80" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}