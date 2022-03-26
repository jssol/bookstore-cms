import { Routes, Route } from 'react-router-dom';
import './scss/App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1 className="text-8xl font-bold text-red-500 text-center">Works</h1>} />
      </Routes>
    </>
  );
}

export default App;
