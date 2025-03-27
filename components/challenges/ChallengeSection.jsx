import React from "react";
import ChallengeCard from "./ChallengeCard";

export default function ChallengesSection({ challenges }) {
	return (
		<div className="space-y-6">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between">
				<h2 className="text-2xl font-bold tracking-wider font-orbitron text-center md:text-left">Active challenges</h2>
				<div className="flex flex-col md:flex-row md:gap-14 items-center">
					<div className="h-[1px] w-[200px] bg-[#FFFFFF] my-2 md:bg-[#FFFFFF66] items-end"></div>
					<button className="text-sm text-white hover:text-white transition-colors font-orbitron bg-[#121727CC] p-3 rounded-lg font-semibold">View all</button>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{challenges.map((challenge) => (
					<ChallengeCard
						key={challenge.id}
						title={challenge.title}
						description={challenge.description}
						status={challenge.status}
						players={challenge.players}
						timeLeft={challenge.time}
						image={challenge.backgroundImage}
						nftType={challenge.category}
						bigCard={false}
					/>
				))}
			</div>
		</div>
	);
}
