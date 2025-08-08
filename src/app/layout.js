import { Figtree } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

export const metadata = {
  title: 'PaisaSync – Smart Personal Finance & Debt Management App',
  description:
    'Manage your money smartly with PaisaSync – the ultimate personal finance & debt payoff planner. Track expenses, set savings goals, and stay in control of your finances with ease!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.className} antialiased`}>{children}</body>
    </html>
  );
}
