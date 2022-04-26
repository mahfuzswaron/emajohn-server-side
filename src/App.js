import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './components/pages/Home/Home/Home';
import CheckOut from './components/pages/CheckOut/CheckOut';
import NotFound from './components/pages/NotFound/NotFound';
import About from './components/pages/About/About';
import Login from './components/shared/Login/Login';
import SignUp from './components/shared/SignUp/SignUp';

import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/shared/RequireAuth/RequireAuth';
import Blogs from './components/pages/Blog/Blogs';
import AddService from './components/AddService/AddService';
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/checkout/:id' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
