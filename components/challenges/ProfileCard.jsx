import React from "react";
import Image from "next/image";
import { StatCard } from "./StatCard";

export default function ProfileCard({ user }) {
	return (
		<div className="rounded-3xl border border-[#EC48994D] bg-[#0e0e20]/50 p-6 backdrop-blur-sm min-h-40">
			<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
				<div className="flex items-center gap-6">
					<div className="relative h-36 w-36 overflow-hidden rounded-2xl">
						<Image
							src={"/images/profile.png"}
							alt={"hey"}
							width={140}
							height={140}
							className="object-contain rounded-2xl"
						/>
					</div>
					<div className="space-y-5">
						<div className="text-xs  font-orbitron bg-[#171C2B] text-[#FFFFFFCC] px-3 py-[3px] w-[100px]">{user.id}</div>
						<h2 className="text-xl font-bold font-spaceGrotesk">{user.name}</h2>
						<div className="flex items-center gap-2">
							{/* <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-800"> */}
							<Image
								src={"/images/sergeant.svg"}
								alt="rank"
								width={24}
								height={24}
							/>
							{/* </div> */}
							<div className="flex">
								<div className="h-8 w-2.5 bg-purple-500"></div>
								<div className="w-24 max-w-32 h-8 bg-[#171C2B] text-center flex items-center px-3 font-orbitron text-sm">{user.level}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-1"></div>

				<div className="grid grid-cols-3 gap-4 w-full md:w-auto self-center">
					<StatCard
						label="Games played"
						value={user.stats.gamesPlayed}
					/>
					<StatCard
						label="NFT collected"
						value={user.stats.nftCollected}
					/>
					<StatCard
						label="Eco system"
						value={user.stats.ecoSystem}
					/>
				</div>
			</div>
		</div>
	);
}
