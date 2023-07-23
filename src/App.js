import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FormPage from './pages/ContactForm';


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
        </BrowserRouter>
    </div>
  );
}

export default App;
