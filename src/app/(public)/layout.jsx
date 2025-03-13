import GeneralHeader from '@/components/layout/GeneralHeader';
import React from 'react';

export default function HomeLayout({ children }) {
  return (
    <React.Fragment>
      <GeneralHeader />
      <main>{children}</main>
    </React.Fragment>
  );
}
