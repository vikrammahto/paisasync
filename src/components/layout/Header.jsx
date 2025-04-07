'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { List, X } from '@phosphor-icons/react';
import { useSidebar } from '@/context/SidebarProvider';

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const { isSidebarOpen } = useSidebar();
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex items-center justify-between px-4 py-2 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSidebar}
            className="p-2 ps-0 text-slate-600 hover:text-slate-900 lg:hidden"
            aria-label="Close sidebar"
          >
            {isSidebarOpen ? <X size={24} /> : <List size={24} />}
          </button>
          <Link href="." className="text-xl font-medium">
            PaisaSync
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={'/vikrammahto.jpeg'}
            width={100}
            height={100}
            alt="Vikram Mahto"
            className="size-6 lg:size-10 rounded lg:rounded-lg object-cover"
          />
          <div className='hidden md:block'>
            <h2>Vikram Mahto</h2>
            <p className="text-sm">Premium</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
