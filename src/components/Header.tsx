import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [revealPercent, setRevealPercent] = useState(0);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const REVEAL_DISTANCE = 80; // px of scroll to fully reveal

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const percent = Math.min(scrollY / REVEAL_DISTANCE, 1);
            setRevealPercent(percent);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "01 // Work", href: "#work" },
        { label: "02 // Skills", href: "#skills" },
        { label: "03 // About", href: "#about" },
        { label: "04 // Contact", href: "#contact" },
    ];

    const translateY = (revealPercent - 1) * 100; // -100% to 0%

    return (
        <header
            ref={headerRef}
            className="w-full flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark px-[5%] lg:px-[18%] py-6 backdrop-blur-md fixed top-0 left-0 right-0 z-50 bg-background-dark/95"
            style={{
                transform: `translateY(${translateY}%)`,
                opacity: revealPercent,
            }}
        >
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                    </div>
                    <span className="text-base font-bold tracking-tight text-neutral-100 group-hover:text-primary-bright transition-colors uppercase">
                        K.Manacio
                    </span>
                </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center h-full gap-10">
                {navLinks.map((link, i) => (
                    <div key={link.href} className="flex items-center gap-10">
                        {i > 0 && <div className="w-px h-5 bg-border-dark" />}
                        <a
                            className="text-[13px] font-mono font-medium text-neutral-500 hover:text-primary-bright transition-colors hover-glitch tracking-widest uppercase"
                            href={link.href}
                            data-text={link.label}
                        >
                            {link.label}
                        </a>
                    </div>
                ))}
            </nav>

            {/* Mobile menu toggle */}
            <div
                className="md:hidden text-neutral-500 hover:text-primary-bright cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <span className="material-symbols-outlined text-2xl">
                    {mobileMenuOpen ? "close" : "menu"}
                </span>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-background-dark/98 backdrop-blur-md border-b border-border-dark md:hidden z-50">
                    <nav className="flex flex-col px-[5%] py-6 gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                className="text-sm font-mono font-medium text-neutral-500 hover:text-primary-bright transition-colors hover-glitch tracking-widest uppercase"
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
