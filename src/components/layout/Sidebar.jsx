'use client';
import Link from 'next/link';
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
    <aside className={`${className} w-full max-w-[280px]`}>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center gap-2 p-2 transition-all"
            >
              <item.icon size={22} />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
