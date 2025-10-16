"use client";
import Link from "next/link";
import Image from "next/image";
import "../globals.css"; // dein LCARS-CSS

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            {/* 🔸 Sticky Navbar */}
            <nav className="nav sticky top-0 z-50">
                <div className="nav-inner">
                    {/* Logo links */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Logo" width={140} height={50} />
                    </Link>

                    {/* Navigation rechts */}
                    <Link href="#">Übersicht</Link>

                    <div className="dropdown">
                        <button className="dropbtn">Datenbanken</button>
                        <div className="dropdown-content">
                            <Link href="#">Schiffe</Link>
                            <Link href="#">Planeten</Link>
                            <Link href="#">Crew</Link>
                        </div>
                    </div>

                    <Link href="#">Missionen</Link>
                    <Link href="#">System</Link>
                    <Link href="#" className="logout">Logout</Link>
                </div>
            </nav>

            {/* Hauptinhalt */}
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}