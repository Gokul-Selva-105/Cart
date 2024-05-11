import React from "react";

import Tree from "./assets/Tree.png";
import bag from "./assets/bag.svg";
import Gift from "./assets/Gift.png";
import IceCristel from "./assets/IceCristel.png";
import Cookie from "./assets/Cookie.png";

import CardsComp from "./CardsComp";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <>
      <div className="flx">
        <CardsComp
          Tree={Tree}
          bag={bag}
          name={"christmas Tree"}
          price={"$19.99"}
        />
        <CardsComp
          Tree={Gift}
          bag={bag}
          name={"christmas Gift"}
          price={"$9.99"}
        />
        <CardsComp
          Tree={IceCristel}
          bag={bag}
          name={"christmas Cristel"}
          price={"$12.99"}
        />
        <CardsComp
          Tree={Cookie}
          bag={bag}
          name={"christmas biscut"}
          price={"$4.99"}
        />
      </div>
    </>
  );
}

export default App;
