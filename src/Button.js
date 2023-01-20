import React from 'react';

export default function Button(props) {
	return (
		<button className={props.buttonClass} onClick={props.onClickBtn}>
			{props.children}
		</button>
	);
}
