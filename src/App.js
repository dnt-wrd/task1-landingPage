import React from 'react';
import "./App.css";
import MainHeader from './components/MainHeader'
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/ContactPage";

function App() {
  return (
      <div>
          <MainHeader />
          <AboutMe />
          <ContactPage />
      </div>
  );
}

export default App;
