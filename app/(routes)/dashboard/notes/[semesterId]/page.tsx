"use client";
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Sample subject data for each semester
const semesterSubjects = {
  1: [
    { name: 'Introduction to Programming', code: 'CS101', credits: 4 },
    { name: 'Mathematics I', code: 'MATH101', credits: 3 },
    { name: 'Physics Fundamentals', code: 'PHY101', credits: 3 },
    { name: 'Communication Skills', code: 'COM101', credits: 2 }
  ],
  2: [
    { name: 'Data Structures', code: 'CS102', credits: 4 },
    { name: 'Mathematics II', code: 'MATH102', credits: 3 },
    { name: 'Digital Electronics', code: 'EE101', credits: 3 },
    { name: 'Technical Writing', code: 'COM102', credits: 2 }
  ],
  6: [
    { name: 'Big Data', code: 'big-data', credits: 4 },
    { name: 'R Programming', code: 'r', credits: 3 },
    { name: 'Algorithm Analysis', code: 'aad', credits: 4 },
    { name: 'Computer Vision', code: 'cv', credits: 3 },
    { name: 'Robotics', code: 'ris', credits: 3 },
    { name: 'Recommendation Systems', code: 'rec', credits: 3 },
    { name: 'International Economics', code: 'ieft', credits: 3 }
  ],
  7: [
    { name: 'Artificial Intelligence', code: 'ai', credits: 4 },
    { name: 'Machine Learning', code: 'ml', credits: 4 },
    { name: 'Cloud Computing', code: 'cc', credits: 3 },
    { name: 'Cyber Security', code: 'cs', credits: 3 }
  ],
  8: [
    { name: 'Advanced Topics in CS', code: 'CS501', credits: 4 },
    { name: 'Research Methodology', code: 'RES501', credits: 3 },
    { name: 'Thesis Project', code: 'THS501', credits: 6 }
  ]
};

const semesterNames = {
  1: 'Semester 1',
  2: 'Semester 2',
  3: 'Semester 3',
  4: 'Semester 4',
  5: 'Semester 5',
  6: 'Semester 6',
  7: 'Semester 7',
  8: 'Semester 8',
};

export default function SemesterDetails() {
  const params = useParams();
  const semesterId = Number(params.semesterId);
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  if (!semesterId || !semesterSubjects[semesterId as keyof typeof semesterSubjects]) {
    return (
      <div className="p-6 max-w-6xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Semester not found</h1>
        <Link href="/dashboard/notes" className="mt-4 inline-flex items-center gap-1 text-blue-600 hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Back to semesters
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <Link 
          href="/dashboard/notes" 
          className="inline-flex items-center gap-1 text-blue-600 hover:underline"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to all semesters
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {semesterNames[semesterId as keyof typeof semesterNames]} Subjects
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {semesterId <= 8 
            ? `Core subjects for Semester ${semesterId}`
            : 'Advanced courses and research'}
        </p>
      </motion.div>

      <div className="space-y-4">
        {semesterSubjects[semesterId as keyof typeof semesterSubjects].map((subject, idx) => (
          <motion.div
            key={subject.code}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-6 rounded-xl border ${expandedSubject === subject.code ? 
              'border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-900/10 dark:to-blue-900/20 shadow-md' : 
              'border-gray-200 dark:border-gray-700 hover:shadow-md'} transition-all`}
          >
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setExpandedSubject(expandedSubject === subject.code ? null : subject.code)}
            >
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-100 text-lg">{subject.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {subject.code.toUpperCase()} • {subject.credits} Credits
                </p>
              </div>
              <div className="text-gray-400">
                {expandedSubject === subject.code ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
            </div>

            <AnimatePresence>
              {expandedSubject === subject.code && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Resources</h5>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10 9 9 9 8 9"/>
                          </svg>
                          Lecture Notes
                        </li>
                        <li className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <line x1="3" y1="9" x2="21" y2="9"/>
                            <line x1="9" y1="21" x2="9" y2="9"/>
                          </svg>
                          Slides
                        </li>
                        <li className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10 9 9 9 8 9"/>
                          </svg>
                          Assignments
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Actions</h5>
                      <div className="space-y-3">
                        <Link 
                          href={`/dashboard/notes/${semesterId}/${subject.code.toLowerCase()}`}
                          className="w-full flex items-center justify-center gap-2 text-sm py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all hover:shadow-lg"
                        >
                          View Materials
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </Link>
                        <button className="w-full flex items-center justify-center gap-2 text-sm py-2 px-4 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                          Add to Favorites
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2">
          Download All Resources
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
      </div>
    </div>
  );
}