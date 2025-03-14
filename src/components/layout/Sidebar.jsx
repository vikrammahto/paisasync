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
import { useSidebar } from '@/context/SidebarProvider';

const Sidebar = () => {
  const { logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const { isSidebarOpen, closeSidebar } = useSidebar();

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
    <React.Fragment>
      <aside
        className={`fixed top-0 left-0 z-30 flex h-full max-w-[280px] flex-col border-e border-slate-200 bg-white pe-2 pt-[60px] transition-all duration-300 ease-in-out lg:relative lg:max-w-[250px] lg:translate-x-0 lg:pt-4 ${
          isSidebarOpen
            ? 'w-full translate-x-0 ps-4'
            : 'w-0 -translate-x-full lg:w-full'
        }`}
      >
        <div className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        closeSidebar();
                      }
                    }}
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

        <div className="mt-auto mb-6">
          <button
            onClick={handleLogout}
            className="flex w-full cursor-pointer items-center gap-2 rounded-lg p-2 text-slate-600 transition-all hover:bg-red-50 hover:text-red-600"
          >
            <SignOut size={22} />
            Log out
          </button>
        </div>
      </aside>
      {/* Overlay for mobile */}
      <div
        className={`bg-opacity-30 fixed inset-0 z-20 bg-black transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? 'opacity-50' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeSidebar}
      />
    </React.Fragment>
  );
};

export default Sidebar;
