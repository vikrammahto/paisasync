'use client';
import React from 'react';
import {
  Calculator,
  ChartPie,
  ArrowDown,
  ArrowUp,
  Wallet,
  Bank,
  ShoppingCart,
  House,
  Car,
  FirstAid,
  ForkKnife,
} from '@phosphor-icons/react';

const page = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-medium">Budget Planner</h1>
          <p className="text-xs text-slate-500">
            Plan and manage your monthly budget
          </p>
        </div>
        <button className="cursor-pointer rounded-lg border border-blue-500 bg-blue-50 px-3 py-1 text-xs text-blue-500 transition duration-200 hover:bg-blue-500 hover:text-white">
          Set new budget
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {/* Monthly Budget Card */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <Calculator className="text-blue-500" />
            <h2 className="text-sm font-medium">Monthly Budget</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">₹50,000</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-xs text-green-500">+5%</span>
              <ArrowUp className="text-green-500" size={14} weight="bold" />
              <span className="text-xs text-slate-500">vs last month</span>
            </div>
          </div>
        </div>

        {/* Spent So Far Card */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <Wallet className="text-blue-500" />
            <h2 className="text-sm font-medium">Spent So Far</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">₹32,500</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-xs text-slate-500">65% of budget used</span>
            </div>
          </div>
        </div>

        {/* Remaining Budget Card */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <Bank className="text-blue-500" />
            <h2 className="text-sm font-medium">Remaining Budget</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">₹17,500</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-xs text-slate-500">15 days left</span>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Allocation and Status */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Category Budget Allocation */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChartPie className="text-blue-500" />
              <h2 className="text-sm font-medium">Budget Allocation</h2>
            </div>
            <button className="text-xs text-blue-500 hover:underline">
              Adjust allocation
            </button>
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
                  <p className="font-medium">₹15,000 / ₹15,000</p>
                  <p className="text-xs text-slate-500">100% used</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all"
                  style={{ width: '100%' }}
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
                  <p className="font-medium">₹8,000 / ₹12,000</p>
                  <p className="text-xs text-slate-500">67% used</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-green-500 transition-all"
                  style={{ width: '67%' }}
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
                  <p className="font-medium">₹5,500 / ₹8,000</p>
                  <p className="text-xs text-slate-500">69% used</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-yellow-500 transition-all"
                  style={{ width: '69%' }}
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
                  <p className="font-medium">₹4,000 / ₹7,000</p>
                  <p className="text-xs text-slate-500">57% used</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-purple-500 transition-all"
                  style={{ width: '57%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Budget Alerts */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="mb-4 flex items-center gap-2">
            <ShoppingCart className="text-blue-500" />
            <h2 className="text-sm font-medium">Budget Alerts</h2>
          </div>
          <div className="space-y-3">
            {/* Alert 1 */}
            <div className="flex items-center justify-between rounded-lg border border-red-100 bg-red-50 p-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-red-100 p-2">
                  <House className="text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-red-700">Housing & Rent</p>
                  <p className="text-xs text-red-600">Budget limit reached</p>
                </div>
              </div>
              <p className="text-sm font-medium text-red-700">100%</p>
            </div>

            {/* Alert 2 */}
            <div className="flex items-center justify-between rounded-lg border border-yellow-100 bg-yellow-50 p-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-yellow-100 p-2">
                  <FirstAid className="text-yellow-500" />
                </div>
                <div>
                  <p className="font-medium text-yellow-700">Healthcare</p>
                  <p className="text-xs text-yellow-600">Approaching limit</p>
                </div>
              </div>
              <p className="text-sm font-medium text-yellow-700">69%</p>
            </div>

            {/* Alert 3 */}
            <div className="flex items-center justify-between rounded-lg border border-green-100 bg-green-50 p-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <ForkKnife className="text-green-500" />
                </div>
                <div>
                  <p className="font-medium text-green-700">Food & Dining</p>
                  <p className="text-xs text-green-600">Within budget</p>
                </div>
              </div>
              <p className="text-sm font-medium text-green-700">57%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
