import React from "react";
import "../index.scss";
import Recepies from "./Recepies";
import Bg from "../images/react.png";

const App = () => {
  return (
    <section>
      <main>
        <img src={Bg} alt="Bg" className="hero" />
        <Recepies />
      </main>
    </section>
  );
};

export default App;
