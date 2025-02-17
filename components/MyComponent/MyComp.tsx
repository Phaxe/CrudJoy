import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';
const MyComp: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 bg-gray-200 p-10 mt-10 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p className="text-center text-gray-700 md:w-[50%] mx-auto">
        This side project is a full-stack web application for managing order issues, built with Next.js 15, Tailwind CSS, TypeScript, Redux, Redux Toolkit, Shadcn, Formik, Yup, Axios, and Lucide Icons. It provides a dynamic, real-time interface for tracking and updating orders efficiently.
      </p>
      <div className="flex itemc justify-center gap-5 mt-2">
        <Button asChild className='bg-[#151b23]'>
          <Link href="https://github.com/Phaxe/CrudJoy"  target="_blank" rel="noopener noreferrer" className="flex ">
          <Github /> GitHub Repo
          </Link>
        </Button>
        <Button asChild className='bg-[#54739c]'>
          <Link href="/orders">Go to Orders Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default MyComp;