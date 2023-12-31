import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Faqs from '../Faqs/Faqs';
import Navbar from '../../components/Navbar/Navbar';
import Schematics from '../../components/Schematics/Schematics';
import Home from '../Home/Home';
import PostSchematic from '../PostSchematic/PostSchematic';





export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <Navbar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path='/' exact element = {<Home />} />
              <Route path='/schematics' exact element = {<Schematics />} />
              <Route path='/Faqs' exact element = {<Faqs />} />
              <Route path='/postSchematic' exact element = {<PostSchematic />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
