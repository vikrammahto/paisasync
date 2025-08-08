import Link from 'next/link';
import React from 'react';

const Header = () => {
  const menuItems = [
    { name: 'Start here', href: '/' },
    { name: 'Finance 101', href: '/finance-101' },
    { name: 'Calculators', href: '/calculators' },
  ];
  return (
    <div className="border-b">
      <nav className="mx-auto flex w-full items-center justify-between px-4 py-4 text-center sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-lg lg:px-8">
        <Link href="/" className="text-lg font-semibold">
          PaisaSync
        </Link>
        <ul className="flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-lg">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
