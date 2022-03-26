import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => (
  <header className="w-full h-12">
    <section className="w-11/12 h-full flex justify-between">
      <section>
        <h1>Bookstore CMS</h1>
        <nav>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </nav>
      </section>
      <button type="button">
        <FaUserCircle />
      </button>
    </section>
  </header>
);

export default Header;
