import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Person from "./Person";
import "./App.css";

function App() {
  return (
    <div >
      <Header className="container"/>
      <main className="flex container">
        <Person
          name="Conan"
          title="Director"
          salary="5500"
          phone="0413346346"
          email="conan@gmail.com"
          animal="Mouse"
        />
        <Person
          name="Doraemon"
          title="Secretary"
          salary="2500"
          phone="0413786346"
          email="dorae@gmail.com"
          animal="Cat"
        />
        <Person
          name="Nobita"
          title="Saleman"
          salary="3100"
          phone="0413346879"
          email="nobita@gmail.com"
          animal="Hamster"
        />
        <Person
          name="Ran Mori"
          title="Content Creator"
          salary="2900"
          phone="0489346879"
          email="ran@gmail.com"
          animal="Rabbit"
        />
      </main>
      <Footer className="container"/>
    </div>
  );
}

export default App;
