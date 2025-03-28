/**
	* @description      : 
	* @author           : 
	* @group            : 
	* @created          : 28/03/2025 - 11:13:35
	* 
	* MODIFICATION LOG
	* - Version         : 1.0.0
	* - Date            : 28/03/2025
	* - Author          : 
	* - Modification    : 
**/
export interface User {
	id: string;
	name: string;
	avatar: string;
	level: string;
	stats: {
		gamesCompleted: string | number;
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

export interface Challenges {
	id: string;
	title: string;
	description: string;
	image: string;
	category: string;
	difficulty: string;
	
}

export interface ecosystems {
	title: string;
	description: string;
	image: string;

}
