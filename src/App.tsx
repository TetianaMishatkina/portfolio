import React, { useState } from "react";
import "./App.css";
import { Main } from "./pages/main";
import { HoverLight } from "./components/hoverLight";
import { StarsBackground } from "./components/starsBackground";

function App() {
  const [isSeeMore, setIsSeeMore] = useState<boolean>(false);
  const handleSeeMore = () => {
    setIsSeeMore(true);
  };

  return (
    <div className="App">
      <StarsBackground isSeeMore={isSeeMore} />
      <HoverLight />
      <Main isSeeMore={isSeeMore} handleSeeMore={handleSeeMore} />
    </div>
  );
}

export default App;
