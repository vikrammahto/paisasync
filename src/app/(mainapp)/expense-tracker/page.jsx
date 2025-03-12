'use client';
import React from 'react';
import {
  Wallet,
  ChartPie,
  ArrowDown,
  ArrowUp,
  ShoppingCart,
  House,
  Car,
  FirstAid,
  ForkKnife,
  Hamburger,
} from '@phosphor-icons/react';

const page = () => {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-medium">Expense Tracker</h1>
          <p className="text-xs text-slate-500">
            Monitor and analyze your spending habits
          </p>
        </div>
        <button className="cursor-pointer rounded-lg border border-blue-500 bg-blue-50 px-3 py-1 text-xs text-blue-500 transition duration-200 hover:bg-blue-500 hover:text-white">
          Add expense
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {/* Total Expenses Card */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <Wallet className="text-blue-500" />
            <h2 className="text-sm font-medium">Total Expenses</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">₹48,350</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-xs text-red-500">+12.5%</span>
              <ArrowUp className="text-red-500" size={14} weight="bold" />
              <span className="text-xs text-slate-500">vs last month</span>
            </div>
          </div>
        </div>

        {/* Budget Status Card */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <ChartPie className="text-blue-500" />
            <h2 className="text-sm font-medium">Budget Status</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">₹1,650</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-xs text-green-500">Under budget</span>
              <ArrowDown className="text-green-500" size={14} weight="bold" />
              <span className="text-xs text-slate-500">₹50,000 limit</span>
            </div>
          </div>
        </div>

        {/* Largest Expense Card */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-blue-500" />
            <h2 className="text-sm font-medium">Largest Expense</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">₹15,000</p>
            <p className="mt-1 text-xs text-slate-500">Housing & Rent</p>
          </div>
        </div>
      </div>

      {/* Category Breakdown and Recent Expenses */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Category Breakdown */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChartPie className="text-blue-500" />
              <h2 className="text-sm font-medium">Expense by Category</h2>
            </div>
            <p className="text-xs text-slate-500">This month</p>
          </div>
          <div className="space-y-4">
            {/* Housing */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <House className="text-slate-500" />
                  <p className="font-medium">Housing & Rent</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹15,000</p>
                  <p className="text-xs text-slate-500">31% of total</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all"
                  style={{ width: '31%' }}
                />
              </div>
            </div>

            {/* Transportation */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Car className="text-slate-500" />
                  <p className="font-medium">Transportation</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹12,000</p>
                  <p className="text-xs text-slate-500">25% of total</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-green-500 transition-all"
                  style={{ width: '25%' }}
                />
              </div>
            </div>

            {/* Healthcare */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FirstAid className="text-slate-500" />
                  <p className="font-medium">Healthcare</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹8,500</p>
                  <p className="text-xs text-slate-500">18% of total</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-yellow-500 transition-all"
                  style={{ width: '18%' }}
                />
              </div>
            </div>

            {/* Food & Dining */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ForkKnife className="text-slate-500" />
                  <p className="font-medium">Food & Dining</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹7,000</p>
                  <p className="text-xs text-slate-500">14% of total</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-purple-500 transition-all"
                  style={{ width: '14%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Expenses */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hamburger className="text-blue-500" />
              <h2 className="text-sm font-medium">Recent Expenses</h2>
            </div>
            <button className="text-xs text-blue-500 hover:underline">
              View all
            </button>
          </div>
          <div className="space-y-3">
            {/* Expense 1 */}
            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <House className="text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Monthly Rent</p>
                  <p className="text-xs text-slate-500">Housing</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-red-500">-₹15,000</p>
                <p className="text-xs text-slate-500">Today</p>
              </div>
            </div>

            {/* Expense 2 */}
            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <Car className="text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Fuel</p>
                  <p className="text-xs text-slate-500">Transportation</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-red-500">-₹4,500</p>
                <p className="text-xs text-slate-500">Yesterday</p>
              </div>
            </div>

            {/* Expense 3 */}
            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <ForkKnife className="text-purple-500" />
                </div>
                <div>
                  <p className="font-medium">Groceries</p>
                  <p className="text-xs text-slate-500">Food & Dining</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-red-500">-₹2,800</p>
                <p className="text-xs text-slate-500">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
