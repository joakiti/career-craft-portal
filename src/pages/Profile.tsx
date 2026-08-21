import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import CurrentRoles from "@/components/CurrentRoles";
import Footer from "@/components/Footer";

const Profile = () => {
  return (
    <div className="min-h-screen bg-card text-white pt-20 flex flex-col">
      <HeroSection />
      <div className="bg-card-lighter py-8">
        <CurrentRoles />
      </div>
      <Education />
      <WorkExperience />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Profile;
