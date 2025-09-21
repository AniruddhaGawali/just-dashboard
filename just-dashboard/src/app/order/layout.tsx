import { Metadata } from 'next';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Just Dashboard | Orders',
  description:
    'A modern dashboard template built with Next.js and Tailwind CSS',
};

function OrderLayout({ children }: Props) {
  return <>{children}</>;
}

export default OrderLayout;
