import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/images/logo.svg";
import Shape from "@assets/images/shape.svg";

const menuItem = [
	{
		title: "Our partners",
		link: "",
	},
	{
		title: "About us",
		link: "",
	},
	{
		title: "How it works?",
		link: "",
	},
];

const Header = () => {
	return (
		<div className="bg-[#002529CC] py-10 absolute top-0 w-full z-10 lg:py-6 md:py-4">
			<div className="w-full h-px bg-gradient-to-r from-[#00E0FF] to-[#00B4CC] absolute bottom-0 left-0" />
			<div className="container">
				<div className="flex items-center justify-between gap-10">
					<Link href="#" target="_blank">
						<Image
							src={Logo}
							alt="Logo"
							width={250}
							className="lg:max-w-[180px] md:max-w-[160px]"
						/>
					</Link>
					<div className="flex items-center justify-end gap-16 flex-1">
						<ul className="flex items-center gap-[54px] lg:hidden">
							{menuItem.map((item, index) => {
								return (
									<li key={index} className="relative group">
										<Image
											src={Shape}
											alt="Shape"
											width={6}
											className="absolute top-1/2 -mt-[3px] -right-8 group-last:hidden"
										/>
										<Link
											href={item.link}
											className="text-lg text-primary font-medium transition-all hover:text-[#CCF9FF]"
										>
											{item.title}
										</Link>
									</li>
								);
							})}
						</ul>
						<Link href={"/"} className="btn">
							Register Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
