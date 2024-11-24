import Testimonials from "@/components/Testimonials";
import FreelanceCard from "@/components/FreelanceCard";
import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('professional-experience');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-card text-white">
      <HeroSection scrollToExperience={scrollToExperience} />
      <Testimonials />
      <Education />
      <WorkExperience />
      <SkillsSection />
    </div>
  );
};

export default Index;