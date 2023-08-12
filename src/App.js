import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FormPage from './pages/ContactForm';
import ProductsPage from './pages/ProductsPage';


function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
         <Routes>
          <Route path="/get-quotation" element = {<FormPage/>}/>
         </Routes>
         <Routes>
          <Route path='/products' element = {<ProductsPage/>}/>
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
