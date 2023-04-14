import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Shared/Header';
import Reviews from './Pages/Reviews/Reviews';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Quran from './Pages/Quran/Quran';
import FullSurah from './Pages/Quran/FullSurah';
import ContactUs from './Pages/ContactUs/ContactUs';
import AboutUs from './Pages/AboutUs/AboutUs';
import NotFound from './Pages/NotFound/NotFound';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/quran' element={<Quran></Quran>}></Route>
        <Route path='/fullsurah' element={<FullSurah></FullSurah>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
