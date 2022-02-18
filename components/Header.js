import React from 'react';
import Image from 'next/image'

export default function Header() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 items-center w-full">
    
    <div className="p-4">
    

    <Image src="/2021.jpg"  width={20} height={20}
    className="w-20 h-20 rounded-full" alt="profile"  />
    </div>
    
    <div className="text-xl font-bold">
    <h1> Project Task Manager</h1>
    </div>
    
    </div>
  );
}
