'use client';
import IncomeTable from '@/components/IncomeTable';
import { Money, MoneyWavy, TrendDown, TrendUp } from '@phosphor-icons/react';
import React from 'react';

const page = () => {
  const data = {
    total_income: 125000,
    income_sources: [
      {
        id: 1,
        source: 'Full-Time Job',
        category: 'Salary',
        amount: 85000,
        target_amount: 90000,
        date_received: '2025-03-05',
        payment_method: 'Bank Transfer',
      },
      {
        id: 2,
        source: 'Freelancing',
        category: 'Side Hustle',
        amount: 25000,
        target_amount: 30000,
        date_received: '2025-03-10',
        payment_method: 'UPI',
      },
      {
        id: 3,
        source: 'Investment Returns',
        category: 'Passive Income',
        amount: 10000,
        target_amount: 8000,
        date_received: '2025-03-12',
        payment_method: 'Direct Deposit',
      },
      {
        id: 4,
        source: 'Affiliate Marketing',
        category: 'Online Income',
        amount: 5000,
        target_amount: 7000,
        date_received: '2025-03-15',
        payment_method: 'PayPal',
      },
    ],
    summary: {
      total_target_income: 135000,
      received_income: 125000,
      percentage_achieved: 92.59,
    },
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-medium">Income Tracker</h1>
          <p className="text-xs text-slate-500">
            View all earning at a glance.
          </p>
        </div>
        <button className="cursor-pointer rounded-lg border border-emerald-500 bg-emerald-50 px-3 py-1 text-xs text-emerald-500 transition duration-200 hover:bg-emerald-500 hover:text-white">
          Add income
        </button>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-2">
            <MoneyWavy />
            <h2 className="text-sm">Overall Income</h2>
          </div>
          <div className="my-1 flex items-center gap-2">
            <h3>₹{data.total_income.toLocaleString()}</h3>
            <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 text-xs text-green-700">
              {data.summary.percentage_achieved}% <TrendUp />
            </div>
          </div>
          <p className="text-xs text-slate-400">
            {data.summary.percentage_achieved >= 100
              ? 'Target achieved! Well done!'
              : `Make ${(100 - data.summary.percentage_achieved).toFixed(1)}% more to reach target`}
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-2">
            <MoneyWavy />
            <h2 className="text-sm">Highest Income</h2>
          </div>
          <h3 className="my-1">
            ₹
            {Math.max(
              ...data.income_sources.map((source) => source.amount),
            ).toLocaleString()}
          </h3>
          <p className="text-xs text-slate-400">
            From{' '}
            {
              data.income_sources.reduce((max, source) =>
                source.amount > max.amount ? source : max,
              ).source
            }
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-2">
            <MoneyWavy />
            <h2 className="text-sm">Lowest Income</h2>
          </div>
          <h3 className="my-1">
            ₹
            {Math.min(
              ...data.income_sources.map((source) => source.amount),
            ).toLocaleString()}
          </h3>
          <p className="text-xs text-slate-400">
            From{' '}
            {
              data.income_sources.reduce((min, source) =>
                source.amount < min.amount ? source : min,
              ).source
            }
          </p>
        </div>
        <div className="col-span-3 rounded-xl border border-slate-200 p-3">
          <div className="mb-3 flex items-center gap-2">
            <MoneyWavy />
            <h2 className="text-sm">All Income</h2>
          </div>
          <IncomeTable data={data.income_sources} />
        </div>
      </div>
    </div>
  );
};

export default page;
