import { DefaultSeo } from "next-seo";
import "../styles/index.scss";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
	const title = "Tao Trade";
	const description = "Tao Trade";
	// const ogImage = `https://tao-trade.com/og-image.png`;

	// const router = useRouter();
	// const cleanPath = router.asPath.split("?")[0];

	// const pageUrl =
	// 	`https://HueGhosts.ai` + (router.asPath === "/" ? "" : cleanPath);

	return (
		<>
			<DefaultSeo
				title={title}
				description={description}
				// canonical={pageUrl}
				// openGraph={{
				// 	type: "website",
				// 	locale: "en_IE",
				// 	url: pageUrl,
				// 	siteName: "HueGhosts",
				// 	images: [
				// 		{
				// 			url: ogImage,
				// 			width: 1200,
				// 			height: 630,
				// 			alt: title,
				// 		},
				// 	],
				// }}
			/>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
