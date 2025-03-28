/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/03/2025 - 13:51:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/03/2025
    * - Author          : 
    * - Modification    : 
**/
import ProfileCard from "@/components/challenges/ProfileCard";
import WelcomeSection from "@/components/challenges/WelcomeSection";
import ChallengesSection from "@/components/challenges/ChallengeSection";
import OnGoingChallengesContainer from "@/components/challenges/OnGoingChallengesContainer";
import MyEcosystemsSection from "@/components/MyEcosystemsSection";
import { userProfile, onboardingSteps, activeChallenges, ongoingChallenges, myEcosystems } from "@/lib/data";

export default function Dashboard() {
    const hasJoinedChallenges = ongoingChallenges.length > 0;
    const hasEarnedNFT = userProfile.earnedNFTs && userProfile.earnedNFTs.length > 0;

    return (
        <div className="min-h-screen bg-[#0a0a1a] text-white bg-[url('/images/challenges-section-bg.png')] bg-cover bg-no-repeat bg-center">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
                <ProfileCard user={userProfile} />
                
                {!hasJoinedChallenges ? (
                    <>
                        <WelcomeSection
                            steps={onboardingSteps}
                            username={userProfile.name.split(" ")[0]}
                        />
                        <ChallengesSection challenges={activeChallenges} />
                    </>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ongoingChallenges.length > 0 && <OnGoingChallengesContainer challenges={ongoingChallenges} />}
                            {myEcosystems.length > 0 && <MyEcosystemsSection ecosystems={myEcosystems} />}
                        </div>
                        <ChallengesSection challenges={activeChallenges} />
                    </>
                )}
            </div>
        </div>
    );
}
