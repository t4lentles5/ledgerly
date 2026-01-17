'use client';

import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';

import { Transaction } from '@features/transactions/types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ExpensesChartProps {
  transactions: Transaction[];
  limit?: number;
  noDataLabel: string;
}

export function ExpensesChart({
  transactions,
  noDataLabel,
}: ExpensesChartProps) {
  const data = useMemo(() => {
    const expenses = transactions.filter((t) => t.amount < 0);

    const categoryMap = new Map<
      string,
      { total: number; icon: string; color: string }
    >();

    expenses.forEach((t) => {
      const current = categoryMap.get(t.category);
      if (current) {
        current.total += Math.abs(t.amount);
      } else {
        categoryMap.set(t.category, {
          total: Math.abs(t.amount),
          icon: t.categoryIcon,
          color: t.categoryIcon,
        });
      }
    });

    const labels = Array.from(categoryMap.keys());
    const values = Array.from(categoryMap.values()).map((v) => v.total);
    const colors = Array.from(categoryMap.values()).map((v) => {
      const colorMatch = v.color.match(/text-(\w+)/);
      const colorName = colorMatch ? colorMatch[1] : 'blue';

      const colorMap: Record<string, string> = {
        red: 'oklch(63.7% 0.237 25.331)',
        blue: 'oklch(62.3% 0.214 259.815)',
        yellow: 'oklch(82.3% 0.199 87.89)',
        teal: 'oklch(69.8% 0.165 186.27)',
        violet: 'oklch(60.6% 0.25 292.717)',
        orange: 'oklch(70.5% 0.213 47.604)',
        green: 'oklch(72.3% 0.219 149.579)',
        pink: 'oklch(65.6% 0.241 354.308)',
        cyan: 'oklch(71.7% 0.149 216.79)',
        amber: 'oklch(76.9% 0.188 70.08)',
        indigo: 'oklch(59.8% 0.222 284.15)',
      };

      return colorMap[colorName] || colorMap.blue;
    });

    return {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: colors,
          borderColor: 'oklch(0.98 0 0)',
          borderWidth: 2,
        },
      ],
    };
  }, [transactions]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 15,
          padding: 15,
          font: {
            size: 12,
          },
          color: 'oklch(0.556 0 0)',
        },
      },
      tooltip: {
        yAlign: 'bottom' as const,
        caretPadding: 20,
        callbacks: {
          label: function (context: TooltipItem<'doughnut'>) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(context.parsed);
            }
            return label;
          },
        },
      },
    },
    cutout: '70%',
  };

  return (
    <div className='flex h-64 w-full items-center justify-center'>
      {data.labels.length > 0 ? (
        <Doughnut data={data} options={options} />
      ) : (
        <p className='text-muted-foreground'>{noDataLabel}</p>
      )}
    </div>
  );
}
