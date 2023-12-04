import React from "react";

import App from "../components/app/app";
import { SEO } from "../components/seo/seo";
import { Script } from "gatsby";

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
			<body>
				<Script dangerouslySetInnerHTML={{__html: `
					(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
					
					ym(91607576, "init", {
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						webvisor:true,
						trackHash:true,
					});
				`}} />
			</body>
		</>
	)
}