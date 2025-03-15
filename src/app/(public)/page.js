'use client';
import GithubIcon from '@/components/icons/Github';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-[#1e2323] to-[#065f42]">
      <section className="relative py-12 sm:py-24">
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center leading-tight text-white">
            <h1 className="text-xl font-light lg:text-5xl">
              Privacy first open-source <br />
              <span className="text-2xl font-semibold text-emerald-500 lg:text-6xl">
                Personal Finance Manager
              </span>
              <br />
              to control your money
            </h1>
            <p className="my-6 text-xl">
              A simple, and secure way to manage your money.{' '}
              <br className="hidden lg:block" />
              Keep your data in{' '}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 underline"
              >
                localStorage
              </a>{' '}
              or sync it to the cloud—your choice.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/overview" className="btn btn-primary px-6">
                Get Started
              </Link>
              <a
                href="https://github.com/vikrammahto/paisasync"
                target="_blank"
                className="btn bg-transparent text-white hover:bg-white hover:text-slate-500"
              >
                Contribute <GithubIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="px-4">
          <Image
            src="/paisasync-overview.png"
            width={1920}
            height={1080}
            alt="PaisaSync overview screen"
            className="mx-auto my-6 w-full max-w-screen-md rounded-xl shadow-xl md:w-auto"
          />
        </div>
      </section>
    </div>
  );
}
