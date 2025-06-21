"use client";
import { motion } from 'framer-motion';
import { BookOpenText, School, Clock, BarChart3, Users, GraduationCap } from 'lucide-react';
import Link from 'next/link';

function Notes() {
  const semesters = [
    { id: 1, name: 'Semester 1', color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'Semester 2', color: 'from-emerald-500 to-emerald-600' },
    { id: 3, name: 'Semester 3', color: 'from-violet-500 to-violet-600' },
    { id: 4, name: 'Semester 4', color: 'from-amber-500 to-amber-600' },
    { id: 5, name: 'Semester 5', color: 'from-rose-500 to-rose-600' },
    { id: 6, name: 'Semester 6', color: 'from-indigo-500 to-indigo-600' },
    { id: 7, name: 'Semester 7', color: 'from-red-500 to-red-600' },
    { id: 8, name: 'Semester 8', color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
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
                transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                    {index === 0 && <BookOpenText className="h-8 w-8" />}
                    {index === 1 && <School className="h-8 w-8" />}
                    {index === 2 && <Clock className="h-8 w-8" />}
                    {index === 3 && <BarChart3 className="h-8 w-8" />}
                    {index >= 4 && index <= 7 && <GraduationCap className="h-8 w-8" />}
                    {index === 8 && <Users className="h-8 w-8" />}
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
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Notes;