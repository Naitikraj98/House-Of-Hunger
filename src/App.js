import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Page/Main';
import Home from './Page/Home';
import Breakfast from './Page/Menu/Breakfast';
import Lunch from './Page/Menu/Lunch';
import Dinner from './Page/Menu/Dinner';
import BookTable from './Page/BookTable';
import Event from './Page/Events';
import Drinks from './Page/Menu/Drinks';
import Story from './Page/Story';
import Resturant from './Page/Footer/Resturant';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/breakfast' element={<Breakfast />} />
          <Route path='/lunch' element={<Lunch/>}/>
          <Route path='/dinner' element={<Dinner/>}/>
          <Route path='/drinks' element={<Drinks/>}/>          
          <Route path='/Booktable' element={<BookTable/>}/>
          <Route path='/Event' element={<Event/>}/>
          <Route path='/Story' element= {<Story/>} />
          <Route path='/Resturant' element = {<Resturant/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
