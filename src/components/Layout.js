import Footer from "./common/Footer";
import Header from "./common/Header";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="flex-1 relative z-[1]">{children}</div>
			<Footer />
		</div>
	);
};
export default Layout;
