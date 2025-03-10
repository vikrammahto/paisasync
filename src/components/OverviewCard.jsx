import { TrendDown, TrendUp } from '@phosphor-icons/react';
import React from 'react';

const OverviewCard = ({
  title,
  icon,
  amount,
  change,
  changeType,
  extraAmount,
}) => {
  return (
    <div className="rounded-xl border border-slate-200 p-3">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-sm">{title}</h2>
      </div>
      <div className="my-1 flex items-center gap-2">
        <h3>₹{amount.toLocaleString()}</h3>
        <div
          className={`flex items-center gap-1 rounded-full px-2 text-xs ${changeType === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
        >
          {change}% {changeType === 'up' ? <TrendUp /> : <TrendDown />}
        </div>
      </div>
      <p className="text-xs text-slate-400">
        You {changeType === 'up' ? 'earned' : 'lost'} an extra{' '}
        <span
          className={changeType === 'up' ? 'text-green-700' : 'text-red-700'}
        >
          ₹{extraAmount.toLocaleString()}
        </span>{' '}
        this month
      </p>
    </div>
  );
};

export default OverviewCard;
