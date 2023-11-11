import { createGlobalStyle } from "styled-components";

import colors from "./constants/colors.json";

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: "Source Sans Pro", sans-serif;
		color: ${colors.majorWhite};
	}

	a {
		font: inherit;
		color: inherit;
		text-decoration: none;
	}

	li {
		list-style: none;
	}
`;

export default GlobalStyles;