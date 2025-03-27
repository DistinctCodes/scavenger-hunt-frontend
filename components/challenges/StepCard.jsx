import React from "react";
import Image from "next/image";

export default function StepCard({ step }) {
	return (
		<div className="flex flex-col items-center">
			<div className="relative mb-4 flex">
				{/* <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-2xl font-bold z-10 relative">{step.number}</div> */}
				{/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-0"> */}
				<div className="bg-[#3B82F6] text-white rounded-full w-10 h-10 flex items-center justify-center mt-5 mr-3">{step.number}</div>
				<div className="relative w-44 h-44">
					<Image
						src={step.image}
						alt={`Step ${step.number}`}
						width={176}
						height={116}
						className="object-fit"
					/>
				</div>
				{/* </div> */}
			</div>

			<h3 className="text-sm font-bold text-center mb-2 tracking-wider font-orbitron">{step.title}</h3>

			<p className="text-xs text-center text-purple-100 mb-4 font-spaceGrotesk">{step.description}</p>

			<p className="text-xs text-center text-purple-200 font-spaceGrotesk">{step.additionalInfo}</p>
		</div>
	);
}
