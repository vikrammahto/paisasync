'use client';
import { GithubLogo } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

const GeneralHeader = () => {
  const menuItems = [
    {
      title: 'Start here',
      href: '#',
    },
    {
      title: 'Finance 101',
      href: '#',
    },
    {
      title: 'Calculators',
      href: '#',
    },
  ];
  return (
    <div className="bg-[#1e2323]">
      <header className="mx-auto flex items-center justify-between p-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <Link href="." className="flex text-xl font-medium text-white">
          PaisaSync
        </Link>
        <nav className="flex items-center justify-center space-x-10">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              title={item.title}
              className="text-white transition-all hover:text-emerald-500"
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-end space-x-6">
          <a
            href="https://github.com/vikrammahto/paisasync"
            title=""
            className="hover:text-opacity-80 inline-flex items-center gap-3 text-white transition-all hover:text-emerald-500"
          >
            Contribute <GithubLogo />
          </a>

          <Link
            href="/overview"
            className="inline-flex items-center justify-center rounded-lg border border-emerald-500 px-6 py-2.5 text-sm font-semibold text-emerald-500 transition-all hover:bg-emerald-500 hover:text-white"
          >
            Sign in
          </Link>
        </div>
      </header>
    </div>
  );
};

export default GeneralHeader;
