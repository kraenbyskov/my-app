import React from 'react';

const Button = (props) => {
	console.log(props);
	return (
		<button
			style={{
				color: 'white',
				backgroundColor: props.color ? props.color : 'black',
				margin: '10px'
			}}
		>
			{props.value ? props.value : 'Tryk på mig'}
		</button>
	);
};

export default Button;
