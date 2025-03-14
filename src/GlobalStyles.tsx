import { createGlobalStyle } from "styled-components";

import colors from "./constants/colors.json";

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		&.modal-opened {
			overflow: hidden;

			body {
				overflow: hidden;
			}
		}
	}

	body {
		font-family: "Source Sans Pro", sans-serif;
		color: ${colors.majorWhite};
		background-color: ${colors.majorBlack};
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