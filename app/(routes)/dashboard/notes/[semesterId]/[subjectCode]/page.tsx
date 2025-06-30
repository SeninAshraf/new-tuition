"use client";
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Youtube, Download } from 'lucide-react';
import Link from 'next/link';

// Define the type for materials
type Material = {
  type: 'pdf' | 'youtube';
  title: string;
  date: string;
  url: string;
  preview?: string;
};

// Materials data (extended with S7 and YouTube example)
const allMaterials: Record<string, Record<string, Material[]>> = {
  s6: {
    r: [
      {
        type: 'pdf',
        title: 'IMPORTANT TOPICS BASED ON PREVIOUS PAPERS',
        date: '2025-03-10',
        url: 'materials/r/rqbank.pdf',
        preview: 'materials/aad/basics-preview.jpg',
      },
    ],
  },
  s7: {
    ai: [
      {
        type: 'pdf',
        title: 'Syllabus',
        date: '2025-06-30',
        url: 'materials/ai/syllabus.pdf',
        preview: 'materials/ai/ai-preview.jpg',
      },
      {
        type: 'youtube',
        title: 'Overall Guide',
        date: '2025-06-30',
        url: 'https://youtu.be/WNED5YVCuwM?si=E3Lr8hJ4siiBhLET',
      },
    ],
    deep: [
      {
        type: 'pdf',
        title: 'Cloud Computing Architecture',
        date: '2025-05-01',
        url: 'materials/cc/cloud-architecture.pdf',
      },
    ],
  },
};

export default function SubjectMaterials() {
  const params = useParams();
  const semesterId = params.semesterId as string;
  const subjectCode = params.subjectCode as string;

  const semesterKey = `s${semesterId}`;
  const materials = allMaterials[semesterKey]?.[subjectCode] ?? [];

  const handleDownload = (url: string, title: string) => {
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = `/${url}`;
    a.download = title.toLowerCase().replace(/\s+/g, '-') + '.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <Link
          href={`/dashboard/notes/${semesterId}`}
          className="flex items-center text-blue-600 hover:underline"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to semester {semesterId}
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {subjectCode.toUpperCase()} Materials
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {materials.length} resources available
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
          >
            {material.type === 'pdf' ? (
              <div className="h-full flex flex-col">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-red-500" />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="font-medium text-gray-800 dark:text-gray-100 line-clamp-2">
                    {material.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {material.date}
                  </p>
                </div>
                <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex gap-2">
                  <a
                    href={`/${material.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
                  >
                    View PDF
                  </a>
                  <button
                    onClick={() => handleDownload(material.url, material.title)}
                    className="flex items-center justify-center py-2 px-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded transition-colors text-sm"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-center">
                  <Youtube className="h-12 w-12 text-red-500" />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="font-medium text-gray-800 dark:text-gray-100 line-clamp-2">
                    {material.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {material.date}
                  </p>
                </div>
                <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={material.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded transition-colors text-sm"
                  >
                    <Youtube className="h-4 w-4 mr-2" />
                    Watch Video
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {materials.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No materials available for this subject yet.
          </p>
        </div>
      )}

      {/* Added footer */}
      <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6">
        <p>Please keep checking continuously as new notes will be uploaded day by day.</p>
        <p className="mt-2">We're constantly updating our resources to provide you with the best materials.</p>
      </footer>
    </div>
  );
}