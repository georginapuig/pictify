import { useState } from 'react';

export default function useValuesState(initValue) {
	const [value, setValue] = useState(initValue);

	const handleChange = e => {
		setValue(e.target.value);
	};

	return [value, handleChange];
}
