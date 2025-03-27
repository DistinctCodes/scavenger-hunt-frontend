import type { User, OnboardingStep, Challenge } from "./types";
import image1 from "@/public/images/futuristic-dj-using-virtual-reality-glasses-headline-party-play-music 2.svg";
export const userProfile: User = {
	id: "#2355414",
	name: "Jendor Glowe",
	avatar: "/placeholder.svg?height=96&width=96",
	level: "Newbie",
	stats: {
		gamesPlayed: "0",
		nftCollected: "0",
		ecoSystem: "0",
	},
};

export const onboardingSteps: OnboardingStep[] = [
	{
		number: 1,
		title: "Choose Your Challenge",
		description: "Pick a challenge that matches your skill level whether you're a beginner or an advanced user.",
		additionalInfo: "Engage with interactive tasks designed to teach you key concepts on a specific blockchain ecosystem.",
		image: "/images/Group1.png",
	},
	{
		number: 2,
		title: "Level up and compete",
		description: "Progress through different levels and unlock more advanced challenges.",
		additionalInfo: "Climb the leaderboard by earning points and competing with other learners in the community.",
		image: "/images/Group2.png",
	},
	{
		number: 3,
		title: "Earn NFT rewards",
		description: "Successfully complete a challenge? Congratulations! You'll earn an exclusive NFT as proof of your achievement.",
		additionalInfo: "Collect and showcase your NFTs in your profile—they're a testament to your growing blockchain expertise.",
		image: "/images/Group3.png",
	},
	{
		number: 4,
		title: "Join the community",
		description: "Share your progress, connect with other learners, and get support in our Discord or Telegram community.",
		additionalInfo: "Participate in seasonal events and special challenges for even more rewards!",
		image: "/images/Group4.png",
	},
];

export const activeChallenges: Challenge[] = [
	{
		id: "1",
		title: "The Cryptic Key",
		description: "Decode the ancient StarNet runes to unlock the hidden vault.",
		backgroundImage: image1,
		status: "Active",
		difficulty: "Easy",
		category: "Beginner",
		time: "20.4H 10H",
		players: "10 players",
		reward: "Rare NFT",
	},
	{
		id: "2",
		title: "The Cryptic Key",
		description: "Decode the ancient StarNet runes to unlock the hidden vault.",
		backgroundImage: image1,
		status: "Active",
		difficulty: "Easy",
		category: "Beginner",
		time: "20.4H 10H",
		players: "10 players",
		reward: "Rare NFT",
	},
	{
		id: "3",
		title: "The Cryptic Key",
		description: "Decode the ancient StarNet runes to unlock the hidden vault.",
		backgroundImage: image1,
		status: "Active",
		difficulty: "Easy",
		category: "Beginner",
		time: "20.4H 10H",
		players: "10 players",
		reward: "Rare NFT",
	},
	{
		id: "4",
		title: "The Cryptic Key",
		description: "Decode the ancient StarNet runes to unlock the hidden vault.",
		backgroundImage: image1,
		status: "Active",
		difficulty: "Easy",
		category: "Beginner",
		time: "20.4H 10H",
		players: "10 players",
		reward: "Rare NFT",
	},
];
