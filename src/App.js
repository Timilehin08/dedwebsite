import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import EmpHome from "./components/EmpHome";
import MarketHome from "./components/MarketHome";
import LenHome from "./components/LenHome";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<EmpHome />} />
          <Route path='/lender' element={<LenHome />} />
          <Route path='/marketing' element={<MarketHome />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
