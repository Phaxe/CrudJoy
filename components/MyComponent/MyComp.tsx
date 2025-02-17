import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';
const MyComp: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 bg-gray-200 p-10 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p>
        This is a simple demo demonstrating CRUD operations like in a real-life project.
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