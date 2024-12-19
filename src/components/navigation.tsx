"use client";

import Link from "next/link";
import { Button } from "../../components/ui/button";

export function Navigation() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Home Link */}
          <Link href="/" className="text-xl font-bold text-slate-900">
            Portfolio
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <Link href="/" className="text-slate-600 hover:text-slate-900">
              Home
            </Link>
            <Link
              href="/products"
              className="text-slate-600 hover:text-slate-900"
            >
              Products
            </Link>
            <Link
              href="/writing"
              className="text-slate-600 hover:text-slate-900"
            >
              Writing
            </Link>
            {/* <Link href="/about" className="text-slate-600 hover:text-slate-900">
              About
            </Link> */}
          </div>

          {/* Contact Button */}
          {/* <Button variant="outline">Contact</Button> */}
        </div>
      </div>
    </nav>
  );
}
