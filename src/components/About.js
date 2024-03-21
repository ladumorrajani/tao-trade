import AboutImg from "@assets/images/about.png";
import AboutShape from "@assets/images/about-shape.png";
import Image from "next/image";

const features = [
	{
		title: "Inspired by Zero-Dated Options",
		description:
			"Inspired by the popularity of zero dated options in traditional finance, TaoTrade brings this concept a step further to allow options to be traded and settled at any time.",
	},
	{
		title: "Unbeatable High Leverage",
		description: (
			<>
				TaoTrade allows traders to trade with up to{" "}
				<strong>1000x</strong> leverage on its protected perpetuals with
				no upfront premiums, no liquidations and capped downside.
				Liquidity providers who sell volatility to these traders receive
				high premiums.
			</>
		),
	},
	{
		title: "For Traders: Protected Perps ",
		description:
			"Experience secure and stress-free day trading with our innovative protected perpetuals, designed to protect traders from sudden price movements and scam wicks. Traders can never be liquidated by price. Positions can expire when margin is depleted.",
	},
	{
		title: "For Yield Farmers: ezVaults",
		description:
			"Optimize your yield generation with our streamlined and user-friendly vaults, making yield farming more accessible and efficient.",
	},
];

const About = () => {
	return (
		<div className="bg-[#002D33] py-32 relative xl:py-24 lg:py-16">
			<div className="container">
				<div className="grid grid-cols-2 mb-4 md:grid-cols-1">
					<div>
						<Image
							src={AboutImg}
							alt="About"
							width={616}
							className="h-full object-cover"
						/>
					</div>
					<div className="p-px bg-gradient-to-r md:bg-gradient-to-b from-[40%] to-[#00E0FF]/50 from-[#002D33]">
						<div className="py-14 px-11 relative bg-[#002428] lg:py-6 lg:px-5 lg:pb-10 h-full">
							<Image
								src={AboutShape}
								alt="AboutShape"
								width={616}
								className="absolute bottom-0 left-0 z-[0]"
							/>
							<div className="flex flex-col items-start relative z-[1]">
								<div className="rounded font-semibold py-2 px-3 bg-[#00E0FF1F] text-base lg:text-sm text-[#00E0FF] tracking-[0.08em] uppercase mb-3">
									ABOUT TAOTRADE
								</div>
								<h2 className="font-medium text-[32px] lg:text-2xl md:text-xl leading-[40px] tracking-[0.02em] text-white">
									TaoTrade is a cutting-edge decentralized
									liquidity provider (LP) derivatives market
									on Arbitrum designed to be the best
									day-trading platform globally.
								</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4 md:grid-cols-1">
					{features.map((item, index) => {
						return (
							<div
								key={index}
								className={`p-px from-[40%] to-[#00E0FF]/50 from-[#002D33] ${
									index % 2
										? "bg-gradient-to-l"
										: "bg-gradient-to-r md:bg-gradient-to-l"
								}`}
							>
								<div
									className={`p-8 lg:p-6 lg:gap-6 h-full flex gap-8 from-[#002D33] to-[#00343A] ${
										index % 2
											? "bg-gradient-to-l"
											: "bg-gradient-to-r md:bg-gradient-to-l"
									}`}
								>
									<div className="w-1 bg-[#00E0FF] lg:w-0.5" />
									<div className="flex flex-col justify-center flex-1">
										<h3 className="text-2xl lg:text-xl tracking-[0.02em] mb-3 font-semibold text-white">
											{item.title}
										</h3>
										<p className="text-white/90 text-base lg:text-sm">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default About;
