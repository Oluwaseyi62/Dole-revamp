import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-dolevian-charcoal">
            Dolevian
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-dolevian-gold'
                    : 'text-dolevian-charcoal hover:text-dolevian-gold'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            to="/shop"
            className="p-2 rounded-full hover:bg-dolevian-cream transition-colors"
          >
            <ShoppingBag
              className="h-5 w-5 text-dolevian-charcoal"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-dolevian-charcoal"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 md:hidden animate-fade-in">
          <div className="flex flex-col p-4 pt-8 space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-medium text-lg tracking-wide p-2 ${
                    isActive
                      ? 'text-dolevian-gold'
                      : 'text-dolevian-charcoal hover:text-dolevian-gold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-6 border-t border-dolevian-gray-200">
              <Link
                to="/shop"
                onClick={closeMenu}
                className="flex items-center space-x-3 p-2 text-dolevian-charcoal"
              >
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                <span>Shop Now</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;