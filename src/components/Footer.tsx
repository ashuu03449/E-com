import React from "react";
import SubscribeForm from "./Input";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 w-full">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Column 1: Address */}
        <div>
          <h2 className="font-bold text-xl text-black">Furniro.</h2>
          <address className="not-italic mt-4 text-gray-600">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </address>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-600 hover:underline">Home</a>
            </li>
            <li>
              <a href="/shop" className="text-gray-600 hover:underline">Shop</a>
            </li>
            <li>
              <a href="/about" className="text-gray-600 hover:underline">About</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Help */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="/payment-options" className="text-gray-600 hover:underline">Payment Options</a>
            </li>
            <li>
              <a href="/returns" className="text-gray-600 hover:underline">Returns</a>
            </li>
            <li>
              <a href="/privacy-policies" className="text-gray-600 hover:underline">Privacy Policies</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="w-full">
          <h3 className="font-semibold text-lg mb-4 sm:mb-0 text-gray-900">Newsletter</h3>
          <br />
         
            <SubscribeForm />
      
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-gray-600">
        © 2023 Furniro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

