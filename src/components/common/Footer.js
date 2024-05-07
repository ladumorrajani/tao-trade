import Twitter from "@assets/images/twitter.svg";
import Discord from "@assets/images/discord.svg";
import GitBook from "@assets/images/gitbook.svg";
import Telegram from "@assets/images/telegram.svg";
import Email from "@assets/images/email.svg";
import Dex from "@assets/images/dextools.svg";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = [
	{
		img: Twitter,
		alt: "Twitter",
		link: "https://twitter.com/TaoTradeX",
		width: 24,
	},
	// {
	// 	img: Discord,
	// 	alt: "Discord",
	// 	link: "https://discord.gg/ndPpvfs2",
	// 	width: 22,
	// },
	{
		img: GitBook,
		alt: "GitBook",
		link: "https://docs.taotrade.io/",
		width: 24,
	},
	{
		img: Telegram,
		alt: "Telegram",
		link: "https://t.me/TaoTradeOfficial",
		width: 24,
	},
	{
		img: Dex,
		alt: "Dex",
		link: "https://www.dextools.io/app/en/ether/pair-explorer/0xdb4296318885327bddf7cff46d08b4be5f5db4d6?t=1713972447851",
		width: 18,
	},
];

const Footer = () => {
	return (
		<div className="bg-[#002D33] relative py-9 lg:py-6">
			<div className="w-full h-px bg-gradient-to-r from-[#00E0FF] to-[#00B4CC] absolute top-0 left-0" />
			<div className="container">
				<div className="flex items-center justify-between md:flex-col md:gap-4">
					<div className="flex items-center gap-7 sm:flex-col sm:gap-3 sm:mb-3">
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
												width={item.width}
												className="lg:max-w-[16px]"
											/>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="flex flex-col justify-end items-end md:items-center">
						<Link
							href="mailto:info@taotrade.io"
							className="text-md text-[#00B3CC] hover:text-white transition-all mb-1 flex items-center gap-2"
						>
							<Image src={Email} alt="Email" width={16} />
							info@taotrade.io
						</Link>
						<p className="text-sm text-[#00B3CC] sm:text-center">
							Copyright © 2024 taotrade. All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
