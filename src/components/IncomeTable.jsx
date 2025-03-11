import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

const IncomeTable = ({ data }) => {
  const columns = [
    {
      accessorKey: 'date_received',
      header: 'Date',
    },

    {
      accessorKey: 'amount',
      header: 'Amount (₹)',
      cell: (info) => `₹${info.getValue().toLocaleString()}`,
    },
    {
      accessorKey: 'source',
      header: 'Source',
    },
    {
      accessorKey: 'category',
      header: 'Category',
    },

    {
      accessorKey: 'payment_method',
      header: 'Payment Method',
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full border-collapse">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b border-slate-200">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="bg-gray-100 p-2 text-left text-sm font-medium"
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="border-b border-slate-200 text-sm hover:bg-gray-50"
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IncomeTable;
