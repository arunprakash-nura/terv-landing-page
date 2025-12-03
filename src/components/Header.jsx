import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ onApplyClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: 'var(--header-height)',
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                color: isScrolled ? 'var(--color-text-main)' : 'white'
            }}
        >
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.5px', display: 'flex', alignItems: 'center' }}>
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="TERV Pro" style={{ height: '40px', width: 'auto' }} />
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none', gap: '32px', alignItems: 'center' }}>
                    <a href="#program" style={{ fontWeight: 500 }}>Program</a>
                    <a href="#curriculum" style={{ fontWeight: 500 }}>Curriculum</a>
                    <a href="#reviews" style={{ fontWeight: 500 }}>Reviews</a>
                    <button className="btn" style={{ backgroundColor: '#794DFD', color: 'white' }} onClick={onApplyClick}>Apply Now</button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        display: 'block' // Visible on mobile by default, hidden via CSS media query
                    }}
                    className="mobile-toggle"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: 'var(--header-height)',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    padding: '20px',
                    boxShadow: 'var(--shadow-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    color: 'var(--color-text-main)'
                }}>
                    <a href="#program" onClick={() => setIsMobileMenuOpen(false)}>Program</a>
                    <a href="#curriculum" onClick={() => setIsMobileMenuOpen(false)}>Curriculum</a>
                    <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
                    <button className="btn" style={{ width: '100%', backgroundColor: '#794DFD', color: 'white' }} onClick={onApplyClick}>Apply Now</button>
                </div>
            )}

            <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
