import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/images/logo.svg";
import Twitter from "@assets/images/twitter.svg";
import Discord from "@assets/images/discord.svg";

const SocialMedia = [
	{
		img: Twitter,
		alt: "Twitter",
		link: "https://twitter.com/TaoTradeX",
	},
	{
		img: Discord,
		alt: "Discord",
		link: "https://discord.gg/ndPpvfs2",
	},
];

const Header = () => {
	return (
		<div className="bg-[#002529CC] py-10 absolute top-0 w-full z-10 lg:py-6 md:py-4">
			<div className="w-full h-px bg-gradient-to-r from-[#00E0FF] to-[#00B4CC] absolute bottom-0 left-0" />
			<div className="container">
				<div className="flex items-center justify-between gap-10 sm:gap-2">
					<Link href="#" target="_blank">
						<Image
							src={Logo}
							alt="Logo"
							width={250}
							className="lg:max-w-[180px] md:max-w-[160px]"
						/>
					</Link>
					<div className="flex items-center justify-end gap-10 flex-1 sm:gap-4">
						<ul className="flex items-center gap-6 lg:hidden">
							{SocialMedia.map((item, index) => {
								return (
									<li key={index}>
										<Link
											href={item.link}
											target="_blank"
											className="w-8 h-8 flex items-center justify-center transition-all hover:opacity-80"
										>
											<Image
												src={item.img}
												alt={item.alt}
												width={26}
												className="lg:max-w-[16px]"
											/>
										</Link>
									</li>
								);
							})}
						</ul>
						<div className="flex items-center gap-4 sm:gap-2">
							<Link
								href={"/whitepaper.pdf"}
								className="btn"
								target="_blank"
							>
								Whitepaper
							</Link>
							<Link
								href={"/"}
								className="btn pointer-events-none sm:hidden"
							>
								App
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
