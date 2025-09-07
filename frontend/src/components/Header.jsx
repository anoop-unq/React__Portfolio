import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiUser } from 'react-icons/fi';


const Header = ({ searchQuery, setSearchQuery }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setIsCartOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-amber-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden p-2 rounded-full hover:bg-amber-700 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
            
            <a href="/" className="flex items-center" onClick={closeAllMenus}>
              <div className="bg-white text-amber-800 rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <span className="text-xl font-bold">FurniCraft</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="px-4 py-2 rounded-md hover:bg-amber-700 transition flex items-center relative group"
                onClick={closeAllMenus}
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-amber-200 w-0 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-3">
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search furniture..."
                className="px-4 py-1 w-40 lg:w-56 text-gray-800 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-amber-600 hover:bg-amber-700 p-2 transition">
                <FiSearch className="h-4 w-4" />
              </button>
            </div>

            {/* User Account */}
            <a href="/account" className="p-2 rounded-full hover:bg-amber-700 transition hidden md:block">
              <FiUser className="h-5 w-5" />
            </a>

            {/* Cart Button */}
            <button 
              className="p-2 rounded-full hover:bg-amber-700 transition relative"
              onClick={toggleCart}
            >
              <FiShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3">
            {/* Search Bar - Mobile */}
            <div className="flex items-center mb-3">
              <input
                type="text"
                placeholder="Search furniture..."
                className="flex-1 px-4 py-2 rounded-l text-gray-800 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r transition">
                <FiSearch className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="block px-4 py-3 rounded-md hover:bg-amber-700 transition"
                  onClick={closeAllMenus}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/account"
                className="block px-4 py-3 rounded-md hover:bg-amber-700 transition flex items-center"
                onClick={closeAllMenus}
              >
                <FiUser className="mr-2" /> My Account
              </a>
            </nav>
          </div>
        )}

        {/* Cart Dropdown */}
        {isCartOpen && (
          <div className="absolute right-4 mt-2 w-72 md:w-96 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
            <div className="p-4">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-bold text-gray-800">Your Cart ({itemCount})</h3>
                <button 
                  onClick={toggleCart}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>
              
              {cartItems.length === 0 ? (
                <div className="py-6 text-center">
                  <FiShoppingCart className="mx-auto h-10 w-10 text-gray-400" />
                  <p className="mt-2 text-gray-500">Your cart is empty</p>
                  <button 
                    onClick={closeAllMenus}
                    className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="max-h-64 overflow-y-auto py-2">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center py-3 border-b">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="ml-3 flex-1">
                          <h4 className="text-sm font-medium text-gray-800">{item.name}</h4>
                          <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
                          <div className="flex items-center mt-1">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-gray-500 hover:text-amber-600 px-2"
                            >
                              -
                            </button>
                            <span className="mx-2 text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-gray-500 hover:text-amber-600 px-2"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          <FiX className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-gray-800 mb-2">
                      <span>Subtotal:</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded transition">
                        View Cart
                      </button>
                      <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded transition">
                        Checkout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;