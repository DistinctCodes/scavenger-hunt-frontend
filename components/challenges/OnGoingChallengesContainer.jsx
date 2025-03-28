/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/03/2025 - 11:03:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/03/2025
    * - Author          : 
    * - Modification    : 
**/
import PropTypes from "prop-types";
import Image from "next/image";

export default function OnGoingChallengesContainer({ challenges }) {
	if (!challenges || challenges.length === 0) {
		return <p className="text-center text-gray-400">No ongoing challenges</p>;
	}

	return (
		<div className="bg-[#0E0A1F] p-6 rounded-xl shadow-md w-full">
			<h2 className="text-2xl font-bold text-white mb-6 text-center font-orbitron">
				My ongoing challenges
			</h2>

			<div className="space-y-4">
				{challenges.map((challenge) => (
					<div key={challenge.id} className="flex items-center bg-[#1A132A] p-4 rounded-lg shadow-md gap-4">
						{/* Challenge Image */}
						<div className="w-14 h-14 rounded-md overflow-hidden">
							<Image
								src={challenge.image}
								alt={challenge.name}
								width={56}
								height={56}
								className="object-cover"
							/>
						</div>

						{/* Challenge Info */}
						<div className="flex-1">
							<h3 className="text-[14px] font-medium text-white font-orbitron">{challenge.title}</h3>
							<p className="text-[12px] text-gray-400 font-orbitron">{challenge.description}</p>
						</div>

						{/* Tags (Ecosystem & Difficulty) */}
						<div className="flex gap-2">
							<span className="px-3 py-1 text-xs font-medium rounded-full bg-[#33334D] text-white">
								{challenge.category}
							</span>
							<span
								className={`px-3 py-1 text-xs font-medium rounded-full ${
									challenge.difficulty === "Easy"
										? "bg-green-600"
										: challenge.difficulty === "Medium"
										? "bg-yellow-600"
										: "bg-red-600"
								} text-white`}
							>
								{challenge.difficulty}
							</span>
						</div>
					</div>
				))}
			</div>

			{/* Pagination Section */}
			<div className="mt-6 flex justify-center items-center space-x-4 text-white text-sm font-orbitron">
                <button className="p-2 bg-[#1A132A] rounded-full hover:bg-[#2A1D3A]">
                    ←
                </button>
                <span>1 - 3 of 3</span>
                <button className="p-2 bg-[#1A132A] rounded-full hover:bg-[#2A1D3A]">
                    →
                </button>
            </div>
		</div>
	);
}

OnGoingChallengesContainer.propTypes = {
	challenges: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			difficulty: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired, 
		})
	),
};
