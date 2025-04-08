
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-12 pb-8 mt-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-store-navy">ModernHome</h3>
            <p className="text-gray-600 mb-4">
              Curated home decor and furniture for the modern lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-store-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-store-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-store-teal transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-md font-bold mb-4 uppercase text-gray-500">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-store-teal transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=furniture" className="text-gray-600 hover:text-store-teal transition-colors">
                  Furniture
                </Link>
              </li>
              <li>
                <Link to="/products?category=decor" className="text-gray-600 hover:text-store-teal transition-colors">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link to="/products?category=lighting" className="text-gray-600 hover:text-store-teal transition-colors">
                  Lighting
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-md font-bold mb-4 uppercase text-gray-500">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-store-teal transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-store-teal transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-store-teal transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-store-teal transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-md font-bold mb-4 uppercase text-gray-500">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-store-teal transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-store-teal transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-store-teal transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-store-teal transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} ModernHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
