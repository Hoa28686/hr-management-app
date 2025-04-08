import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PersonList from "./Employees/PersonList";
import "./App.css";

function App() {
  return (
    <div >
      <Header className="container"/>
      <main className="flex container">
        <PersonList/>
        
      </main>
      <Footer className="container"/>
    </div>
  );
}

export default App;
