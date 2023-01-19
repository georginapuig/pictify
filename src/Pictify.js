import React, { useRef, useState } from 'react';
import './Pictify.css';
import arrowDown from './arrow-small-down.svg';
import * as htmlToImage from 'html-to-image';

export default function Pictify(props) {
	const [text, setText] = useState('type to change');
	const [color, setColor] = useState('#5d6d81');

	// creating a reference to the div with the id of domEl.
	const domEl = useRef(null);

	const handleChange = e => {
		setText(e.target.value);
	};

	const handleChangeColor = e => {
		setColor(e.target.value);
	};

	// convert HTML into image
	const downloadImage = async () => {
		const dataUrl = await htmlToImage.toPng(domEl.current);

		// download image
		const link = document.createElement('a');
		link.download = 'html-to-img.png';
		link.href = dataUrl;
		link.click();
		console.log(dataUrl, domEl, link);
	};

	return (
		<div className='Pictify'>
			<div className='PictifyBtns'>
				<input
					type='color'
					name='backgroundColor'
					id='backgroundColor'
					onChange={props.handleChangeBg}
					value={props.backgroundColor}
				/>
				<input
					type='color'
					name='textColor'
					id='textColor'
					onChange={handleChangeColor}
					value={color}
				/>
				<button className='downloadBtn' onClick={downloadImage}>
					<img
						style={{ marginRight: '.35rem' }}
						src={arrowDown}
						alt='arrow-down'
					/>
					Download image
				</button>
			</div>

			<div
				id='domEl'
				ref={domEl}
				style={{ backgroundColor: props.backgroundColor }}>
				<textarea
					style={{ color: color }}
					className='text'
					name='text'
					value={text}
					onChange={handleChange}
					cols='30'
					rows='auto'></textarea>
			</div>
		</div>
	);
}
