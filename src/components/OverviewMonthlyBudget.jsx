import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const OverviewMonthlyBudget = () => {
  const totalBudget = 50000;
  const spentAmount = 40000;
  const remainingAmount = totalBudget - spentAmount;

  const data = [
    { name: 'Available', value: remainingAmount },
    { name: 'Spent', value: spentAmount },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="z-50 w-64 rounded-md border border-gray-200 bg-white p-3"
          style={{ pointerEvents: 'none' }}
        >
          <div className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: payload[0].payload.fill }}
            ></span>
            <span className="font-semibold">{payload[0].name}</span>
          </div>
          <div className="mt-1 text-lg">
            ₹{payload[0].value.toLocaleString()}
          </div>
          <div className="mt-1 text-xs text-gray-500">
            {((payload[0].value / totalBudget) * 100).toFixed(1)}% of total
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h2 className="text-sm">Budget</h2>
      <div style={{ width: '100%', height: 280, position: 'relative' }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data.map((entry, index) => ({
                ...entry,
                fill: COLORS[index], // Add fill property for tooltip access
              }))}
              cx="50%"
              cy="50%"
              innerRadius={100}
              outerRadius={120}
              paddingAngle={3}
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
              cornerRadius={100}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
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
          <div className="text-sm text-gray-600">Total Budget</div>
          <div className="text-2xl font-bold">
            ₹{totalBudget.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-center gap-8">
        <div>
          <span className="flex items-center gap-1 text-gray-600">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: COLORS[1] }}
            ></span>
            Spent
          </span>
          <div className="font-semibold">₹{spentAmount.toLocaleString()}</div>
        </div>
        <div>
          <span className="flex items-center gap-1 text-gray-600">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: COLORS[0] }}
            ></span>
            Remaining
          </span>
          <div className="font-semibold">
            ₹{remainingAmount.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewMonthlyBudget;
