'use client';
import React from 'react';
import {
  Target,
  Coins,
  ArrowUp,
  Car,
  House,
  Airplane,
  GraduationCap,
  Plus,
} from '@phosphor-icons/react';

const page = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-medium">Savings Goals</h1>
          <p className="text-xs text-slate-500">Track your savings targets</p>
        </div>
        <button className="cursor-pointer rounded-lg border border-blue-500 bg-blue-50 px-3 py-1 text-xs text-blue-500 transition duration-200 hover:bg-blue-500 hover:text-white">
          New goal
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {/* Total Savings Card */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <Coins className="text-blue-500" />
            <h2 className="text-sm font-medium">Total Savings</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">₹2,85,000</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-xs text-green-500">+12%</span>
              <ArrowUp className="text-green-500" size={14} weight="bold" />
              <span className="text-xs text-slate-500">vs last month</span>
            </div>
          </div>
        </div>

        {/* Active Goals Card */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <Target className="text-blue-500" />
            <h2 className="text-sm font-medium">Active Goals</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">4</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-xs text-slate-500">2 near completion</span>
            </div>
          </div>
        </div>

        {/* Monthly Contribution Card */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <ArrowUp className="text-blue-500" />
            <h2 className="text-sm font-medium">Monthly Contribution</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">₹25,000</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-xs text-slate-500">Auto-debit active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Goals Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {/* Goal 1: House Down Payment */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-blue-100 p-2">
                <House className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">House Down Payment</h3>
                <p className="text-xs text-slate-500">High Priority</p>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm text-slate-600">Progress</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-500 transition-all"
                style={{ width: '75%' }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Saved: ₹15,00,000</span>
            <span className="font-medium">Goal: ₹20,00,000</span>
          </div>
        </div>

        {/* Goal 2: Car Fund */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-green-100 p-2">
                <Car className="text-green-500" />
              </div>
              <div>
                <h3 className="font-medium">Car Fund</h3>
                <p className="text-xs text-slate-500">Medium Priority</p>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm text-slate-600">Progress</span>
              <span className="text-sm font-medium">45%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-green-500 transition-all"
                style={{ width: '45%' }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Saved: ₹2,25,000</span>
            <span className="font-medium">Goal: ₹5,00,000</span>
          </div>
        </div>

        {/* Goal 3: Vacation Fund */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-purple-100 p-2">
                <Airplane className="text-purple-500" />
              </div>
              <div>
                <h3 className="font-medium">Vacation Fund</h3>
                <p className="text-xs text-slate-500">Low Priority</p>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm text-slate-600">Progress</span>
              <span className="text-sm font-medium">30%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-purple-500 transition-all"
                style={{ width: '30%' }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Saved: ₹60,000</span>
            <span className="font-medium">Goal: ₹2,00,000</span>
          </div>
        </div>

        {/* Goal 4: Education Fund */}
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-yellow-100 p-2">
                <GraduationCap className="text-yellow-500" />
              </div>
              <div>
                <h3 className="font-medium">Education Fund</h3>
                <p className="text-xs text-slate-500">High Priority</p>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm text-slate-600">Progress</span>
              <span className="text-sm font-medium">15%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-yellow-500 transition-all"
                style={{ width: '15%' }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Saved: ₹1,50,000</span>
            <span className="font-medium">Goal: ₹10,00,000</span>
          </div>
        </div>

        {/* Add New Goal Card */}
        <div className="flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-slate-300 p-4 transition-colors hover:border-blue-500 hover:bg-blue-50">
          <div className="text-center">
            <div className="mb-2 flex justify-center">
              <Plus className="text-blue-500" size={24} />
            </div>
            <p className="text-sm font-medium text-blue-500">Add New Goal</p>
            <p className="text-xs text-slate-500">
              Create a new savings target
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
