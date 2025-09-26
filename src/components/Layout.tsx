import React from 'react';
import Header from './Header';
import { MadeWithApplaa } from './made-with-applaa';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="py-8">
        <MadeWithApplaa />
      </footer>
    </div>
  );
};

export default Layout;