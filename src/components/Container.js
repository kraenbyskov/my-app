import React from 'react';

const container = {
	width: '80%',
	margin: 'auto 50px',
	background: 'blue'
};

function Container(props) {
	return <div style={container}>{props.children}</div>;
}

export default Container;
