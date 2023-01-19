import Pictify from './Pictify';
import useValuesState from './hooks/useValuesState';

import './App.css';

function App() {
	const [backgroundColor, setBackgroundColor] = useValuesState('#f8eddd');

	return (
		<div className='App' style={{ backgroundColor: backgroundColor }}>
			<Pictify
				handleChangeBg={setBackgroundColor}
				backgroundColor={backgroundColor}
			/>
		</div>
	);
}

export default App;
