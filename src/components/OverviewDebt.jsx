import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const OverviewDebt = () => {
  const totalDebt = 50000;
  const amountPaid = 40000;
  const remainingAmount = totalDebt - amountPaid;
  const paidPercentage = ((amountPaid / totalDebt) * 100).toFixed(1);

  const data = [
    { name: 'Debt Paid', value: amountPaid, isRounded: true },
    { name: 'Remaining Debt', value: remainingAmount, isRounded: false },
  ];

  const COLORS = ['#00C49F', '#E5E7EB'];

  return (
    <div>
      <h2 className="text-sm">Debt Overview</h2>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div style={{ width: 300, height: 280, position: 'relative' }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                paddingAngle={0}
                dataKey="value"
                nameKey="name"
                startAngle={90}
                endAngle={-270}
                cornerRadius={100}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <div className="text-sm text-gray-500">Payoff Progress</div>
            <div className="text-2xl font-bold text-gray-800">
              {paidPercentage}%
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col justify-start gap-3">
          <div>
            <span className="flex items-center gap-1 text-gray-600">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: COLORS[0] }}
              ></span>
              Debt Paid
            </span>
            <div className="font-semibold">₹{amountPaid.toLocaleString()}</div>
          </div>
          <div>
            <span className="flex items-center gap-1 text-gray-600">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: COLORS[1] }}
              ></span>
              Remaining Amount
            </span>
            <div className="font-semibold">₹{remainingAmount.toLocaleString()}</div>
          </div>
          <div>
            <span className="flex items-center gap-1 text-gray-600">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              Total Debt
            </span>
            <div className="font-semibold">₹{totalDebt.toLocaleString()}</div>
          </div>
        </div>
      </div>
      <p className="text-center">
        You've paid {paidPercentage}% of total debt amount ₹
        {totalDebt.toLocaleString()}.
      </p>
    </div>
  );
};

export default OverviewDebt;
