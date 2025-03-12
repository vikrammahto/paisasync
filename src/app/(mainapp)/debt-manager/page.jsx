'use client';
import React from 'react';
import {
  Bank,
  CreditCard,
  Coins,
  ChartPie,  
  Warning,
} from '@phosphor-icons/react';

const page = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-medium">Debt Manager</h1>
          <p className="text-xs text-slate-500">
            Track and manage your debts efficiently.
          </p>
        </div>
        <button className="cursor-pointer rounded-lg border border-blue-500 bg-blue-50 px-3 py-1 text-xs text-blue-500 transition duration-200 hover:bg-blue-500 hover:text-white">
          Add new debt
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <Bank className="text-blue-500" />
            <h2 className="text-sm font-medium">Total Debt</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">₹345,000</p>
            <p className="text-xs text-slate-500">38.9% paid</p>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <Coins className="text-blue-500" />
            <h2 className="text-sm font-medium">Monthly Payment</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">₹15,000</p>
            <p className="mt-1 text-xs text-slate-500">Due across 3 debts</p>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <Warning className="text-orange-500" />
            <h2 className="text-sm font-medium">High Interest Debts</h2>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold">1</p>
            <p className="mt-1 text-xs text-slate-500">
              Debts with &gt;10% interest rate
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="mb-4 flex items-center gap-2">
            <CreditCard className="text-blue-500" />
            <h2 className="text-sm font-medium">Upcoming Payments</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
              <div>
                <p className="font-medium">Credit Card</p>
                <p className="text-xs text-slate-500">Axis Bank</p>
              </div>
              <div className="text-right">
                <p className="font-medium">₹3,000</p>
                <p className="text-xs text-slate-500">Due: April 5, 2024</p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
              <div>
                <p className="font-medium">Car Loan</p>
                <p className="text-xs text-slate-500">HDFC Bank</p>
              </div>
              <div className="text-right">
                <p className="font-medium">₹4,000</p>
                <p className="text-xs text-slate-500">Due: April 10, 2024</p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
              <div>
                <p className="font-medium">Home Loan</p>
                <p className="text-xs text-slate-500">State Bank</p>
              </div>
              <div className="text-right">
                <p className="font-medium">₹8,000</p>
                <p className="text-xs text-slate-500">Due: April 15, 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <div className="mb-4 flex items-center gap-2">
            <ChartPie className="text-blue-500" />
            <h2 className="text-sm font-medium">Debt Breakdown</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Home Loan</p>
                  <p className="text-xs text-slate-500">7.5% interest</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹250,000</p>
                  <p className="text-xs text-slate-500">16.7% paid</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all"
                  style={{ width: '16.7%' }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Car Loan</p>
                  <p className="text-xs text-slate-500">8.5% interest</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹60,000</p>
                  <p className="text-xs text-slate-500">40% paid</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all"
                  style={{ width: '40%' }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Credit Card</p>
                  <p className="text-xs text-slate-500">18% interest</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹35,000</p>
                  <p className="text-xs text-slate-500">30% paid</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all"
                  style={{ width: '30%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
