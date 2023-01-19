import { useState } from 'react';

export default function useValuesState(initValue) {
	const [value, setValue] = useState(initValue);

	const handleChange = e => {
    console.log(e.target.value);
		setValue(e.target.value);
	};

	return [value, handleChange];
}
