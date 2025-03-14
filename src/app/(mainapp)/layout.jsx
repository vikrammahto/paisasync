import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import SidebarProvider from '@/context/SidebarProvider';
import React from 'react';

export default function MainAppLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col">
        <Header />
        <div className="mx-auto flex w-full grow sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <Sidebar />
          <main className="w-full p-4 lg:pe-0">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
