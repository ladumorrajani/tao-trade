import BannerBg from "@assets/images/banner-bg.png";
import BannerShape from "@assets/images/banner-shape.png";
import BannerImg from "@assets/images/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
	return (
		<div className="relative">
			<Image src={BannerBg} fill alt="Banner bg" />
			<div className="pt-[120px] lg:pt-[90px] md:pt-[60px]">
				<div className="relative z-[1] overflow-hidden">
					<Image
						src={BannerShape}
						className="absolute right-0 -top-[100px] xl:max-w-[800px] lg:-top-[90px] md:max-w-[500px]"
						alt="Banner bg"
						width={1200}
					/>
					<div className="container relative z-[2]">
						<div className="flex items-center justify-between gap-16 md:flex-col md:gap-2">
							<div className="max-w-[638px] xl:max-w-[50%] w-full py-20 md:max-w-full md:pb-4 md:pt-10">
								<h1 className="text-5xl lg:text-4xl lg:leading-tight lg:mb-4 leading-[56px] text-white mb-8 font-semibold">
									Day-Trading Derivatives Market powered by a
									Decentralised LP
								</h1>
								<p className="text-2xl lg:text-xl lg:mb-8 text-white/80 mb-12">
									Protected Perpetuals. Enhanced Trading and
									Yield Generation
								</p>
								<div className="flex gap-6 items-center">
									<Link
										href="https://app.taotrade.io/"
										target="_blank"
										className="btn-secondary"
									>
										Enter Dapp
									</Link>
									<Link
										href="https://docs.taotrade.io/"
										target="_blank"
										className="btn"
									>
										Learn More
									</Link>
								</div>
							</div>

							<div className="py-10 flex-1 flex items-center">
								<Image
									src={BannerImg}
									alt="Banner bg"
									width={448}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Banner;
