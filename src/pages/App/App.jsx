import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Guide from '../Guide/Guide';
import FAQ from '../FAQ/FAQ';
import PostForm from '../../components/PostForm/PostForm';
import NavBar from '../../components/NavBar/NavBar';
import Schematic from '../Schematic/Schematic';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/faqs/guide" element={<Guide />} />
              <Route path="/faqs" element={<FAQ />} />
              <Route path="/postform" element={<PostForm />} />
              <Route path="/schematic" element={<Schematic />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
