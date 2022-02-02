import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import ItemList from './pages/ItemList';
import SingleItem from './pages/ItemEdit';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/itemlist" element={<ItemList />} />
          <Route exact path="/itemedit" element={<SingleItem />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
