import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
	background-color: #d2dbdc;
	margin: 0;
	font-family: 'Segoe UI', 'Helvetica Neue', Helvetica, 'Lucida Grande', Arial; 
} 
`;

export const AppWindow = styled.div`
  display: flex;
  height: 100vh;
  background-color: #ededed;
`;