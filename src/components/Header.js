import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import '../scss/Header.scss';

const Header = () => (
  <header className="w-full h-20">
    <section className="w-11/12 text-blue-600 h-full flex items-center justify-between mx-auto">
      <section className="w-1/2 h-full flex items-center py-1">
        <h1 className="font-bold text-3xl">Bookstore CMS</h1>
        <nav className="uppercase ml-6">
          <NavLink className="text-blue-500 text-sm link" to="/books">Books</NavLink>
          <NavLink className="ml-5 text-blue-500 text-sm link" to="/categories">Categories</NavLink>
        </nav>
      </section>
      <button type="button">
        <FaUserCircle className="bg-blue-700 text-white rounded-full antialiased text-4xl" />
      </button>
    </section>
  </header>
);

export default Header;
