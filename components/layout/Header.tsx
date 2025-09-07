import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-indigo-600">LK Properties</a>
        </Link>
        <nav className="space-x-4">
          <Link href="#"><a>Rooms</a></Link>
          <Link href="#"><a>Mansions</a></Link>
          <Link href="#"><a>Countryside</a></Link>
          <Link href="#"><a>Villas</a></Link>
        </nav>
        <div className="space-x-2">
          <Link href="/signin"><a className="px-4 py-2">Sign In</a></Link>
          <Link href="/signup"><a className="px-4 py-2 bg-indigo-600 text-white rounded">Sign Up</a></Link>
        </div>
      </div>
    </header>
  );
};
