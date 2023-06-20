import Document, { Head, Html, Main, NextScript } from 'next/document';

import Footer from "../components/Footer.js"
import RecomendedReviews from "../components/LandingPageElements/recomendedReviews_StoresOffersPage.js"

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head></Head>
				<body>
					<Main />
					<Footer/>
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
