'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-[#1e2323] to-[#065f42]">
      <section className="relative py-12 sm:py-24">
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
