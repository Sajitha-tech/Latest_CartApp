import logo from './logo.svg';
import './App.css';
import Additems from './components/Additems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import Navcart from './components/Navcart';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navcart/>
     <Routes>
      <Route path='/' element={<Additems/>}/>
      <Route path='/view' element={<View/>}/>
      
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
