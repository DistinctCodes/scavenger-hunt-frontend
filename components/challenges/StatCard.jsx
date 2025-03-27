import React from "react";

export function StatCard({ label, value }) {
	return (
		<div className="flex flex-col items-center justify-center p-4 border-l border-[#BFBFBF] first:border-l-0 md:first:border-l h-[50px]">
			<div className="flex items-center justify-center mb-2 font-orbitron text-lg">{value}</div>
			<div className="text-[10px] text-gray-400 font-spaceGrotesk">{label}</div>
		</div>
	);
}
