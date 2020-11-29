//This needs to be imported everywhere because of JSX
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import TodoApp from "./components/TodoApp";
export default function App() {
  return (
    <div>
      {/* Always start components name with capital letter otherwise react will handle the tag as a DOM element */}
      <Header />
      <MainContent />
      <TodoApp />
      <Footer />
    </div>
  );
}
