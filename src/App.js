import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Latestreleases from './Pages/Latestreleases';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Men from './Pages/Men'
import Women from './Pages/Women';
import Kids from './Pages/Kids'
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact';
import LoginSignupy from './Pages/LoginSignupy';



function App() {

  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Latestreleases/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/contact' element={<Contact/>}/>
    
    
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/login2' element={<LoginSignupy/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;