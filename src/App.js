import Pictify from './Pictify';
import React, { useState } from 'react';

import './App.css';

function App() {
	const [backgroundColor, setBackgroundColor] = useState('#f8eddd');

	const handleChangeBg = e => {
		setBackgroundColor(e.target.value);
		console.log(e.target.value);
	};

	return (
		<div className='App' style={{ backgroundColor: backgroundColor }}>
			<Pictify
				handleChangeBg={handleChangeBg}
				backgroundColor={backgroundColor}
			/>
		</div>
	);
}

export default App;
