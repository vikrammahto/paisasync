'use client';
import { GithubLogo } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
    <div className="relative bg-gradient-to-b from-[#1e2323] to-[#065f42]">
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

      <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center leading-tight text-white">
            <h1 className="text-2xl font-light lg:text-5xl">
              Privacy-first open source{' '}
              <span className="font-semibold text-emerald-500">
                Personal Finance Manager
              </span>{' '}
              <br />
              to control your money
            </h1>
            <p className="my-6 text-xl">
              A simple, transparent, and secure way to manage your money. <br />{' '}
              Keep your data private 🔒 or sync 🔁 it to the cloud—your choice
              🤗.
            </p>
            <Link
              href="/overview"
              className="inline-block rounded-xl bg-emerald-500 px-6 py-3 text-white shadow-lg hover:bg-emerald-600"
            >
              Get Started
            </Link>
          </div>
        </div>
        <Image
          src="/paisasync-overview.png"
          width={1920}
          height={1080}
          alt="PaisaSync overview screen"
          className="mx-auto my-6 w-full max-w-screen-md rounded-lg shadow-xl md:w-auto"
        />
      </section>
    </div>
  );
}
