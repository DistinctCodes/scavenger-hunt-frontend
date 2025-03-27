export interface User {
	id: string;
	name: string;
	avatar: string;
	level: string;
	stats: {
		gamesPlayed: string | number;
		nftCollected: string | number;
		ecoSystem: string | number;
	};
}

export interface OnboardingStep {
	number: number;
	title: string;
	description: string;
	additionalInfo: string;
	image: string;
}

export interface Challenge {
	id: string;
	title: string;
	description: string;
	backgroundImage: string;
	status: string;
	difficulty: string;
	category: string;
	time: string;
	players: string;
	reward: string;
}
