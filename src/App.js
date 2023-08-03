import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PaymentSuccess from './Pages/PaymentSuccess';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/paymentSuccess' element={<PaymentSuccess />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
