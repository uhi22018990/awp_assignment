import QuestionPage from './pages/QuestionPage';
import SignUpIn from './pages/SignUpIn'
import Home from './pages/Home'
import QuestionList from './pages/QuestionList'
import NavBar from './components/NavBar';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/q/:qid" element={<QuestionPage />} />
          <Route path="/login" element={<SignUpIn />} />
          <Route path="/qlist" element={<QuestionList />} />
          <Route path="/"  element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
