
import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home.js';
import Lists from './Pages/list/Lists.js'
import Hotel from './Pages/singleHotel/Hotel';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<Lists/>}/>
      <Route path='/singleHotel/:id' element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
