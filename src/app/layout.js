import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'PaisaSync – Smart Personal Finance & Money Management App',
  description:
    'Take control of your money with PaisaSync – the all-in-one personal finance app. Track expenses, manage budgets, monitor savings, and plan your financial future effortlessly!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
