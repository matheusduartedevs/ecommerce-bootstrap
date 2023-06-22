import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLoja from './components/NavbarLoja';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <NavbarLoja />
      <div className="produtos">
        <Home />
      </div>
    </div>
  );
}

export default App
