import TaoPad from "@assets/images/taopad.svg";
import Arbitrum from "@assets/images/arbitrum.svg";
import Image from "next/image";

const Logos = [
	{
		img: TaoPad,
		alt: "True Usd",
		width: 200,
	},
	{
		img: Arbitrum,
		alt: "Arbitrum",
		width: 180,
	},
];

const Partners = () => {
	return (
		<div className="bg-secondary py-[50px] -mt-1 relative xl:py-9 lg:py-6">
			<div className="w-full h-px bg-gradient-to-r from-[#002D33] via-[#00E0FF] to-[#002D33] absolute top-0 left-0" />
			<div className="w-full h-0.5 bg-gradient-to-r from-[#002D33] via-[#00E0FF] to-[#002D33] absolute bottom-0 left-0" />
			<div className="container">
				<div className="flex items-center gap-20 justify-center xl:gap-10 lg:gap-6">
					{Logos.map((item, index) => {
						return (
							<div key={index}>
								<Image
									src={item.img}
									alt={item.alt}
									width={item.width}
									className="opacity-60"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default Partners;
