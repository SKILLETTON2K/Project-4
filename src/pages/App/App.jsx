import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Faqs from '../Faqs/Faqs';
// import PostForm from '../../components/PostForm/PostForm';
import NavBar from '../../components/Navbar/Navbar';
import Schematics from '../Schematics/Schematics';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              {/* <Route path="/postform" element={<PostForm />} /> */}
              <Route path='/' exact element = {<Home />} />
              <Route path='/schematics' exact element = {<Schematics />} />
              <Route path='/Faqs' exact element = {<Faqs />} />
              <Route path='/sign-up' exact element = {<SignUp />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
