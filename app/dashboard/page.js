import ProfileCard from "@/components/challenges/ProfileCard";
import WelcomeSection from "@/components/challenges/WelcomeSection";
import ChallengesSection from "@/components/challenges/ChallengeSection";
import { userProfile, onboardingSteps, activeChallenges } from "@/lib/data";

export default function Dashboard() {
	return (
		<div className="min-h-screen bg-[#0a0a1a] text-white bg-[url('/images/challenges-section-bg.png')] bg-cover bg-no-repeat bg-center">
			<div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
				<ProfileCard user={userProfile} />
				<WelcomeSection
					steps={onboardingSteps}
					username={userProfile.name.split(" ")[0]}
				/>
				<ChallengesSection challenges={activeChallenges} />
			</div>
		</div>
	);
}
