import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s - Shopcart online store',
    default: 'Shopcart online store',
  },
  description: 'Shopcart online store, Your one stop shop for all you needs',
};

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
};

export default ClientLayout;
