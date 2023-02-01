import React from 'react';
import "./App.css";
import MainHeader from './components/MainHeader'
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
          <MainHeader />
          <AboutMe />
          <ContactPage />
          <Footer />
      </div>
  );
}

export default App;
