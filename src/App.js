//This needs to be imported everywhere because of JSX
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
