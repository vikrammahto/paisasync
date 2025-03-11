'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  Coins,
  CreditCard,
  CurrencyDollarSimple,
  PiggyBank,
  SquaresFour,
  Wallet,
} from '@phosphor-icons/react';

const Sidebar = ({ className }) => {
  const pathname = usePathname();

  const menuItems = [
    { title: 'Overview', href: '/overview', icon: SquaresFour },
    {
      title: 'Income Tracker',
      href: '/income-tracker',
      icon: CurrencyDollarSimple,
    },
    { title: 'Budget Planner', href: '/budget-planner', icon: Wallet },
    { title: 'Savings Goal', href: '/savings-goal', icon: PiggyBank },
    { title: 'Expense Tracker', href: '/expense-tracker', icon: CreditCard },
    { title: 'Debt Manager', href: '/debt-manager', icon: Coins },
  ];

  return (
    <aside className={`${className} w-full max-w-[280px] pt-4`}>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 rounded-lg p-2 transition-all hover:bg-slate-100 ${
                  isActive
                    ? 'font-semibold text-slate-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <item.icon
                  size={22}
                  weight={isActive ? 'fill' : 'regular'}
                  className={isActive ? 'text-green-600' : 'text-slate-500'}
                />
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
