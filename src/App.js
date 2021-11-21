
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap'

import Header from "./Components/Header"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import HomeScreen from './Screens/HomeScreen';
import ProductsScreen from './Screens/ProductsScreen';

function App() {
  return (
    <>
    
  <Router>
    
  <Header />
  <Container>
    <Routes>
    
    <Route exact path="/" element={<HomeScreen/>} />
    <Route exact path="/products" element={<ProductsScreen/>}/>
    
    </Routes>
    </Container>
  </Router>
 </>
  )
}

export default App;
