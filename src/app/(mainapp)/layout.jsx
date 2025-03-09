import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import React from 'react';

export default function MainAppLayout({ children }) {
  return (
    <div className=''>
      <Header />
      <div className="mx-auto grid grid-cols-6 px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <Sidebar className="col-span-1 min-h-screen border-e border-slate-200" />
        <main className="col-span-5 p-6">{children}</main>
      </div>
    </div>
  );
}
