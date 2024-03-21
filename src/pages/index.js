import About from "@components/About";
import Banner from "@components/Banner";
import Layout from "@components/Layout";
import Partners from "@components/Partners";

const Home = () => {
	return (
		<Layout>
			<Banner />
			<Partners />
			<About />
		</Layout>
	);
};

export default Home;
