
import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.div`
	width: ${({ fullwidth }) => fullwidth ? "100%" : "80%"};
	margin: ${(props) => props.fullwidth ? "0px" : "auto 50px"};
	background: ${(props) => props.color};
	padding: 10px;
`

function Container({ children, color, fullwidth }) {
	return <StyledContainer color={color} fullwidth={fullwidth}>{children}</StyledContainer>;
}

export default Container;
