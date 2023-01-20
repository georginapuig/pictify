import React, { useRef } from 'react';
import './Pictify.css';
import arrowDown from './arrow-small-down.svg';
import * as htmlToImage from 'html-to-image';
import useValuesState from './hooks/useValuesState';
import Button from './Button';
import Input from './Input';

export default function Pictify(props) {
	const [text, setText] = useValuesState('type to change');
	const [color, setColor] = useValuesState('#5d6d81');

	// creating a reference to the div with the id of textContainer.
	const textContainer = useRef(null);

	const downloadImage = async () => {
		/* taking the text and replacing the spaces with dashes. */
		const downloadName = text.split(' ').join('-');
		/* converting the HTML into an image. */
		const dataUrl = await htmlToImage.toPng(textContainer.current);

		// download image
		const link = document.createElement('a');
		link.download = `${downloadName}.png`;
		link.href = dataUrl;
		link.click();
		console.log(dataUrl, textContainer, link);
	};

	return (
		<div className='Pictify'>
			<div className='PictifyBtns'>
				<Input
					name='backgroundColor'
					onChange={props.handleChangeBg}
					value={props.backgroundColor}
				/>
				<Input name='textColor' onChange={setColor} value={color} />
				<Button buttonClass='DownloadBtn' onClickBtn={downloadImage}>
					<img
						style={{ marginRight: '.35rem' }}
						src={arrowDown}
						alt='arrow-down'
					/>
					Download image
				</Button>
			</div>

			<div
				id='TextContainer'
				ref={textContainer}
				style={{ backgroundColor: props.backgroundColor }}>
				<textarea
					style={{ color: color }}
					className='Text'
					name='text'
					value={text}
					onChange={setText}
					cols='30'
					rows='auto'></textarea>
			</div>
		</div>
	);
}
