import React from 'react';
import './App.css';
import MovingAnElement from './GSAP/MovingAnElement'
import GSAPComponentTextColorChange from "./GSAP/gsapTextColorChange.js";


function App() {

  return (
		<div className="App">
			<p>Welcome Tto GSAPTEST</p>
			<GSAPComponentTextColorChange />
      <MovingAnElement/>
		</div>
	);
}

export default App;
