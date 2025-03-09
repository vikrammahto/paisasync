import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex items-center justify-between px-4 py-2 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <Link href="." className="text-xl font-medium">
          PaisaSync
        </Link>
        <div className="flex items-center gap-2">
          <Image
            src={'/vikrammahto.jpeg'}
            width={100}
            height={100}
            className="h-10 w-10 rounded-xl object-cover"
          />
          <div>
            <h2>Vikram Mahto</h2>
            <p className="text-sm">Premium</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
