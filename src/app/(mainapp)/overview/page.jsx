'use client';
import OverviewCard from '@/components/OverviewCard';
import OverviewMonthlyBudget from '@/components/OverviewMonthlyBudget';
import { ArrowDown, ArrowUp, MoneyWavy } from '@phosphor-icons/react';
import React from 'react';

const page = () => {
  const overviewData = [
    {
      title: 'Income',
      icon: <ArrowDown />,
      amount: '65400',
      change: 3.5,
      changeType: 'up',
      extraAmount: '2000',
    },
    {
      title: 'Expenses',
      icon: <ArrowUp />,
      amount: '40000',
      change: 2.1,
      changeType: 'down',
      extraAmount: '1500',
    },
    {
      title: 'Savings',
      icon: <MoneyWavy />,
      amount: '25400',
      change: 1.8,
      changeType: 'up',
      extraAmount: '1000',
    },
  ];
  return (
    <div>
      <h1 className="font-medium">Good Morning, Vikram</h1>
      <p className="text-xs text-slate-500">Your financial overview.</p>
      <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
        {overviewData.map((data, index) => (
          <OverviewCard
            key={index}
            title={data.title}
            icon={data.icon}
            amount={data.amount}
            change={data.change}
            changeType={data.changeType}
            extraAmount={data.extraAmount}
          />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-1 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-3">
          <OverviewMonthlyBudget />
        </div>
      </div>
    </div>
  );
};

export default page;
