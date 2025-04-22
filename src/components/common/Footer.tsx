import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 text-white bg-dolevian-charcoal">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="mb-4 font-serif text-xl">Dolevian</h3>
            <p className="text-sm leading-relaxed text-dolevian-gray-300">
              Premium clothing for the modern individual. Crafted with care and
              designed for distinction.
            </p>
            <div className="flex pt-2 space-x-4">
              <a
                href="#"
                className="transition-colors text-dolevian-gray-300 hover:text-dolevian-gold"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="transition-colors text-dolevian-gray-300 hover:text-dolevian-gold"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="transition-colors text-dolevian-gray-300 hover:text-dolevian-gold"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm transition-colors text-dolevian-gray-300 hover:text-dolevian-gold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-dolevian-gold shrink-0 mt-0.5" />
                <span className="text-dolevian-gray-300">
                  123 Fashion Avenue, Osun, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-dolevian-gold shrink-0" />
                <span className="text-dolevian-gray-300">+234 915 263 9685</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-dolevian-gold shrink-0" />
                <span className="text-dolevian-gray-300">info@dolevian.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg">Newsletter</h4>
            <p className="mb-4 text-sm text-dolevian-gray-300">
              Subscribe to receive updates on new collections and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 text-sm text-white border rounded-md bg-dolevian-gray-800 border-dolevian-gray-700 placeholder-dolevian-gray-400 focus:outline-none focus:ring-2 focus:ring-dolevian-gold/50"
                required
              />
              <button
                type="submit"
                className="w-full btn bg-dolevian-gold text-white hover:bg-dolevian-lightGold py-2.5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 text-sm text-center border-t border-dolevian-gray-700 text-dolevian-gray-400">
          <p>© {new Date().getFullYear()} Dolevian. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;