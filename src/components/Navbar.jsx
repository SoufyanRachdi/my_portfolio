import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
    { path: '/', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 md:px-12">
                {/* Logo / Name */}
                <NavLink to="/" className="font-heading text-xl font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                    Soufyan Rachdi
                </NavLink>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-slate-200'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="block md:hidden text-cyan-400"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isOpen && (
                <div className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block text-sm font-bold uppercase tracking-widest ${isActive ? 'text-cyan-400' : 'text-slate-400'
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
