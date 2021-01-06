import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	background-color: #fff;
	overflow-y: auto;
	
	&::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(0,0,0,.2);
	}
`;
