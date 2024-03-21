import Twitter from "@assets/images/twitter.svg";
import Discord from "@assets/images/discord.svg";
import GitBook from "@assets/images/gitbook.svg";
import Dex from "@assets/images/dex.svg";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = [
	{
		img: Twitter,
		alt: "Twitter",
		link: "#",
	},
	{
		img: Discord,
		alt: "Discord",
		link: "#",
	},
	{
		img: GitBook,
		alt: "GitBook",
		link: "#",
	},
	{
		img: Dex,
		alt: "Dex",
		link: "#",
	},
];

const Footer = () => {
	return (
		<div className="bg-[#002D33] relative py-9 lg:py-6">
			<div className="w-full h-px bg-gradient-to-r from-[#00E0FF] to-[#00B4CC] absolute top-0 left-0" />
			<div className="container">
				<div className="flex items-center justify-between md:flex-col md:gap-4">
					<div className="flex items-center gap-7">
						<span className="text-base lg:text-sm text-[#00E0FF] font-semibold tracking-[0.08em] uppercase">
							FOLLOW US ON
						</span>
						<ul className="flex items-center gap-6 lg:gap-3">
							{SocialMedia.map((item, index) => {
								return (
									<li key={index}>
										<Link
											href={item.link}
											target="_blank"
											className="w-12 h-12 lg:w-8 lg:h-8 rounded-full rounded-br-sm border border-[#00B3CC] flex items-center justify-center hover:bg-[#00B3CC] transition-all"
										>
											<Image
												src={item.img}
												alt={item.alt}
												width={24}
												className="lg:max-w-[16px]"
											/>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<p className="text-sm text-[#00B3CC]">
						Copyright © 2024 taotrade. All Rights Reserved.
					</p>
				</div>
			</div>
		</div>
	);
};
export default Footer;
