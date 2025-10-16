"use client";
import Image from "next/image";
import Link from "next/link";
import "../globals.css"; // hier liegt dein LCARS-CSS

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            {/* Navbar */}
            <nav className="nav sticky top-0 z-50 flex justify-between items-center px-8 py-4 shadow-lg">
                <div className="logo">
                    <Image src="/logo.png" alt="Logo" width={160} height={60} />
                </div>
                <div className="flex gap-4">
                    <Link href="#">Home</Link>
                    <Link href="#">Schiffe</Link>
                    <Link href="#">Planeten</Link>
                    <Link href="#">Crew</Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 container mx-auto mt-12">
                <h1>Übersicht</h1>
                <div className="lcars-divider">
                    <div className="lcars-cap"></div>
                    <div className="lcars-line"></div>
                </div>
                <p>Willkommen in der LCARS-Zentrale, Commander.</p>
            </main>

            {/* Footer */}
            <footer className="text-center py-8 text-gray-400">
                © 2025 Starfleet Command Interface
            </footer>
        </div>
    );
}