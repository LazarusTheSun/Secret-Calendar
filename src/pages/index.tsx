import * as React from "react";

import App from "../components/app/app";
import { SEO } from "../components/seo/seo";

const IndexPage = () => {
	return (
		<App />
	)
};

export default IndexPage;

export const Head = () => {
	return (
		<>
			<html lang="ru" />
			<meta name="yandex-verification" content="053fb0383c178cb1" />
			<SEO />
		</>
	)
}