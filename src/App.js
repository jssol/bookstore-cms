import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/bookstore-cms" element={<Books />} />
      <Route path="/books" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
