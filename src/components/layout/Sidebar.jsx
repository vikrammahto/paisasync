'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import {
  Coins,
  CreditCard,
  CurrencyDollarSimple,
  PiggyBank,
  SquaresFour,
  Wallet,
  SignOut,
} from '@phosphor-icons/react';
import { useAuth } from '@/hooks/useAuth';

const Sidebar = ({ className }) => {
  const { logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter(); // Added the router import

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

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <aside
      className={`${className} flex h-full w-full max-w-[280px] flex-col pt-4 pe-2`}
    >
      <div className="flex-1">
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
      </div>

      <div className="group mt-auto mb-6">
        <button
          onClick={handleLogout}
          className="flex w-full cursor-pointer items-center gap-2 rounded-lg p-2 transition-all hover:bg-red-50 hover:text-red-600"
        >
          <SignOut size={22} />
          Log out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
