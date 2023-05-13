import React from "react";
import RoundOne from "./components/roundDesign/RoundOne";
import RoundTwo from "./components/roundDesign/RoundTwo";
import RoundThree from "./components/roundDesign/RoundThree";
import RoundFor from "./components/roundDesign/RoundFor";
import RoundFive from "./components/roundDesign/RoundFive";
import Home from "./Home";
function App() {
  return (
    <div className="w-full h-screen font-bodyFont text-textColor bg-black relative overflow-hidden">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10 ">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFor />
        <RoundFive />
      </div>
    </div>
  );
}

export default App;
