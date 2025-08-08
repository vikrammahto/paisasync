import Header from '@/components/layout/public/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { WandSparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <div className="mx-auto flex w-full grow flex-col items-center justify-center px-4 py-16 text-center sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-lg lg:px-8 lg:py-20">
        <Badge>
          <WandSparkles /> We&apos;re building
        </Badge>
        <h1 className="mb-3 text-4xl font-semibold">
          All-in-One Personal Finance Manager
        </h1>
        <p className="text-2xl">
          A smart way to manage money, expenses, budgets, debt, and savings.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button>Get started! It&apos;s free.</Button>
          <Button variant="outline" asChild>
            <Link
              href="https://github.com/vikrammahto/paisasync"
              target="_blank"
            >
              Contribute
            </Link>
          </Button>
        </div>
      </div>
      <footer>
        <p className="border-t py-4 text-center">
          Made with ❤️ by{' '}
          <Link href="https://vikrammahto.com?ref=paisasync" target="_blank">
            Vikram Mahto
          </Link>
        </p>
      </footer>
    </div>
  );
}
