import React from 'react';
import './Input.css';

export default function Input(props) {
	return (
		<input
			type='color'
			name={props.name}
			onChange={props.onChange}
			value={props.value}
		/>
	);
}
