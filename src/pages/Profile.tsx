import FreelanceCard from "@/components/FreelanceCard";
import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import CurrentRoles from "@/components/CurrentRoles";

const Profile = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('professional-experience');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-card text-white pt-20">
      <HeroSection scrollToExperience={scrollToExperience} />
      <div className="bg-card-lighter py-8">
        <CurrentRoles />
      </div>
      <Education />
      <WorkExperience />
      <SkillsSection />
    </div>
  );
};

export default Profile;