import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="inner">
        Bar
        <p className="first">Foo</p>
        <p className="second">Bar</p>
      </div>
      <div className="bottom">Foo</div>
    </div>
  );
}

export default App;
