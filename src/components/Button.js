import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
	color: white;
	background-color: black;
	margin: 10px;
`;
const ButtonStyleBorder = styled(ButtonStyle)`
	border:20px solid green;
`;

const Button = (props) => {
    return props.border ? (
        <ButtonStyleBorder>{props.value ? props.value : 'Tryk på mig'}</ButtonStyleBorder>
    ) : (
        <ButtonStyle>{props.value ? props.value : 'Tryk på mig'}</ButtonStyle>
    );
};

export default Button;
