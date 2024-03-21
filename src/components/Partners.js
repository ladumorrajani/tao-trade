import Usd from "@assets/images/usd.svg";
import TrueUsd from "@assets/images/trueusd.svg";
import Solana from "@assets/images/solana.svg";
import BitCoin from "@assets/images/bitcoin.svg";
import Image from "next/image";

const Logos = [
	{
		img: BitCoin,
		alt: "Bit coin",
	},
	{
		img: TrueUsd,
		alt: "True Usd",
	},
	{
		img: Usd,
		alt: "Usd coin",
	},
	{
		img: Solana,
		alt: "Solana",
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
								<Image src={item.img} alt={item.alt} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default Partners;
